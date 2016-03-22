var fs = require('fs');
var mongoClient = require('mongodb').MongoClient;

var mongoUrl = 'mongodb://localhost:27017/tatort';
var tweetCollection = 'tweets';
var userCollection = 'users';

(function init() {

  ranking();
})();

function ranking() {

  mongoClient.connect(mongoUrl, function(error, db) {

    if (!error) {

      console.log('Connected to database', mongoUrl);
      var tweets = db.collection(tweetCollection);
      var users = db.collection(userCollection);

      var batch = users.initializeUnorderedBulkOp();

      // Aggregate number of tweets per user
      tweets.aggregate([
        { $group: {
          _id: '$user_screen_name',
          count: { $sum: 1 }
        } },
        { $sort: { 'count': -1 } },
        // { $limit: 10 },
        { $project : {
          '_id': 0,
          'name': '$_id',
          'tweets': '$count'
        } }
      ], function (error, result) {

        if (!error) {

          // Calculate rank based on user tweet count
          var rank = 0;
          var lastValue = Infinity;

          result.forEach(function (doc) {

            if (doc.tweets < lastValue) {

              doc.rank = ++rank;
              lastValue = doc.tweets;
            } else {

              doc.rank = rank;
            }

            // Update or insert file to batch
            batch.find({ name: doc.name }).upsert().update({
              $set: { tweets: doc.tweets, rank: doc.rank }
            });
          });

          // Execute batch and save file to server
          batch.execute(function (error, result) {

            if (!error) {

              console.log('Number of entries matched:', result.nMatched);
              console.log('Number of entries inserted:', result.nInserted);
              console.log('Number of entries upserted:', result.nUpserted);
              console.log('Number of entries modified:', result.nModified);
              db.close();
            } else {

              console.log(error);
              db.close();
            }
          });

          // Save user ranking to JSON
          saveJSON(JSON.stringify(result), 'users/users.json');
        } else {

          console.log(error);
          db.close();
        }
      });

    } else {

      db.close();
    }
  });
}

function saveJSON(string, filename) {

  fs.writeFile(filename, string, function (error) {

    if (!error) {

      console.log('File saved:', filename);
    } else {

      console.log(error);
    }
  });
}

var fs = require('fs');
var mongoClient = require('mongodb').MongoClient;

var mongoUrl = 'mongodb://localhost:27017/tatort';
var userCollection = 'users';

(function init() {

  distribution();
})();

function distribution() {

  mongoClient.connect(mongoUrl, function(error, db) {

    if (!error) {

      console.log('Connected to database', mongoUrl);

      var users = db.collection(userCollection);
      var bulk = users.initializeUnorderedBulkOp();

      // Aggregate number of users per tweet count
      users.aggregate([
        { $group: {
          _id: '$rank',
          count: { $sum: 1 }
        } },
        { $sort: { 'count': -1 } }
      ], function (error, result) {

        if (!error) {

          // Get get ranking percentages per user
          // Same: How many people share the same ranking then me?
          // Better: How many people are worse than me?
          users.find({}).forEach(function (doc) {

            var percentage = getPercentage(result, doc);

            bulk.find({'_id': doc._id}).update({
              $set: {
                better: percentage.better,
                same: percentage.same
              }
            });
          }, function () {

            // Execute bulk and save file to server
            bulk.execute(function (error, result) {

              if (!error) {

                console.log('Number of entries matched:', result.nMatched);
                console.log('Number of entries modified:', result.nModified);
                db.close();
              } else {

                console.log(error);
                db.close();
              }
            });
          });
        } else {

          console.log(error);
          db.close();
        }
      });

    } else {

      console.log(error);
      db.close();
    }
  });
}

function getPercentage(distribution, user) {

  var sum = distribution.reduce(function (s, rank) {

    return s + rank.count;
  }, 0);

  var before = distribution.reduce(function (s, rank) {

    if (rank._id > user.rank) {

      return s + rank.count;
    } else {

      return s;
    }
  }, 0);

  var count = distribution.filter(function (a) {

    return a._id == user.rank;
  });

  return {
    better: Math.floor((before / sum) * 100),
    same: Math.floor(100 / (sum / count[0].count))
  };
}

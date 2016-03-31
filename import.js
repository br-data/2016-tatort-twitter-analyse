// Import JSON files to MongoDB
var fs = require('fs');
var mongoClient = require('mongodb').MongoClient;

var mongoUrl = 'mongodb://localhost:27017/tatort';
var collectionName = 'tweets';

(function init() {

  loadFiles();
})();

function loadFiles() {

  var files = [];
  var normalizedPath = require('path').join(__dirname, 'download');

  fs.readdirSync(normalizedPath).forEach(function (file) {

    var ref = require('./download/' + file);
    files.push(ref);
  });

  saveToMongo(files);
}

function saveToMongo(files) {

  mongoClient.connect(mongoUrl, function (error, db) {

    if (!error) {

      console.log('Connected to database', mongoUrl);
      var collection = db.collection(collectionName);
      var batch = collection.initializeOrderedBulkOp();

      files.forEach(function (file) {

        file.tweets.forEach(function (tweet) {

          // Convert date strings to date objects
          tweet.published_at = new Date(tweet.published_at);
          tweet.german_time = new Date(tweet.german_time);

          console.log('Upserted tweet ', tweet.twitter_id);

          // Upsert method
          batch.find({ twitter_id: tweet.twitter_id }).upsert().update({
            $set: tweet
          });

          // Insert method
          // batch.insert(tweet);
        });
      });

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
    } else {

      console.log(error);
      db.close();
    }
  });
}

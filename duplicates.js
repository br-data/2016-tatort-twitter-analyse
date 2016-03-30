// Find and remove duplicates
var mongoClient = require('mongodb').MongoClient;

var mongoUrl = 'mongodb://localhost:27017/tatort';
var collectionName = 'tweets';

(function init() {

  findDuplicates();
})();

function findDuplicates() {

  mongoClient.connect(mongoUrl, function (error, db) {

    if (!error) {

      console.log('Connected to database', mongoUrl);

      var collection = db.collection(collectionName);

      collection.aggregate([
        { "$group": {
            "_id": "$twitter_id",
            "count": { "$sum": 1 }
        } },
        { "$match": {
            "_id": { "$ne" : null },
            "count" : { "$gt": 1 }
        } },
        { "$project": {
            "name": "$_id",
            "_id": 0
        } }
      ], function (error, result) {

        console.log('Number of duplicates found: ', result.length);

        result.forEach(function (duplicate) {

          collection.findOneAndDelete({ twitter_id: duplicate }, function (error, result) {

            if (!error) {

              console.log('Removed duplicate ', duplicate);
            } else {

              console.log(error);
              db.close();
            }
          });
        });
      });

    } else {

      console.log(error);
      db.close();
    }
  });
}

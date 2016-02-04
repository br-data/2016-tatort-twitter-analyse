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

            var bulk = users.initializeUnorderedBulkOp();

            // Aggregate number of tweets per user
            tweets.aggregate([
                { $group: {
                    _id: '$user_screen_name',
                    count: { $sum: 1 }
                }},
                { $sort: { 'count': -1 } },
                // { $limit: 100 },
                { $project : { _id: 0, count: 1, name: '$_id', 'tweets': '$count' } }
            ], function (error, result) {

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
                });

                // Save ranking to (new) collection
                //users.insert(result);

                // Save user ranking to JSON
                saveJSON(JSON.stringify(result), 'users/users.json');

                db.close();
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

var fs = require('fs');
var mongoClient = require('mongodb').MongoClient;

var mongoUrl = 'mongodb://localhost:27017/tatort';
var userCollection = 'users';

(function init() {

    rankingDistribution();
})();

function rankingDistribution() {

    mongoClient.connect(mongoUrl, function(error, db) {

        if (!error) {

            console.log('Connected to database', mongoUrl);

            var users = db.collection(userCollection);

            // Aggregate number of tweets per user
            users.aggregate([
                { $group: {
                    _id: '$rank',
                    count: { $sum: 1 }
                }},
                { $sort: { 'count': -1 } }
            ], function (error, result) {

                console.log(result);

                // Save ranking distribution to JSON
                saveJSON(JSON.stringify(result), 'users/rankingDistribution.json');

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

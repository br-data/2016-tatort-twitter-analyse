var mongoClient = require('mongodb').MongoClient;
    
var mongoUrl = 'mongodb://localhost:27017/tatort';
var collectionName = 'tweets';

(function init() {

    analyse();
})();

function analyse() {

    mongoClient.connect(mongoUrl, function(error, db) {

        if (!error) {

            console.log('Connected to database', mongoUrl);
            var collection = db.collection(collectionName);
            
            // Count all tweets
            var tweetsCount = collection.find().count(function (error, result) {

                console.log("Total number of tweets:", JSON.stringify(result));
            });


            // Aggregate number of tweets per user
            var tweetsPerUser = collection.aggregate([
                { $group: {
                    _id: '$user_name',
                    count: { $sum: 1 }
                }},
                { $sort: { 'count': -1 } },
                { $limit: 10 }
            ], function (error, result) {

                console.log("Number of tweets per user:", JSON.stringify(result));
            });


            // Aggregate number of tweets per date
            var tweetsPerDate = collection.aggregate([
                { $group: {
                    _id: {
                        year: { $year : '$german_time' },
                        month: { $month : '$german_time' },
                        day: { $dayOfMonth : '$german_time' },
                    },
                    perDate: { $sum: 1 }
                }},

                { $sort: { 'perDate': -1 } }
            ], function (error, result) {

                console.log("Number of tweets per date:", JSON.stringify(result));
            });


            // Aggregate number of tweets per date and per minute
            var tweetsPerMinute = db.tweets.aggregate([

                { $group: {
                    _id: {
                        year: { $year : '$german_time' },
                        month: { $month : '$german_time' },
                        day: { $dayOfMonth : '$german_time' },
                        hour: { $hour : '$german_time' },
                        minute: { $minute : '$german_time' },
                    },
                    perMinute: { $sum: 1 }
                }},

                { $sort: { 'perMinute': -1 } }

            ], function (error, result) {

                console.log("Number of tweets per minute:", JSON.stringify(result));
            });

            // @todo
            // db.close();
            
        } else {

            console.log(error);
        }
    });
}

var fs = require('fs');
var mongoClient = require('mongodb').MongoClient;
var json2csv = require('json2csv');

var mongoUrl = 'mongodb://localhost:27017/tatort';
var collectionName = 'tweets';

var reports = {

    tweetCount: undefined,
    userCount: undefined,
    hashtags: undefined,
    mentions: undefined,
    urls: undefined,
    retweets: undefined,
    tweetsPerUser: undefined,
    tweetsPerDate: undefined,
    tweetsPerMinute: undefined
};

(function init() {

    analyse();
})();

function analyse() {

    mongoClient.connect(mongoUrl, function(error, db) {

        if (!error) {

            console.log('Connected to database', mongoUrl);
            var collection = db.collection(collectionName);


            // Count all tweets
            collection.find().count(function (error, result) {

                // console.log("Total number of tweets:", JSON.stringify(result));
                reports.tweetCount = result;
                saveText("Total number of tweets: " + JSON.stringify(result), './reports/tweetCount.txt');

                closeConnection(db);
            });


            // Count all unique users
            collection.distinct('user_screen_name', function (error, result) {

                // console.log("Total number of users:", result.length);
                reports.userCount = result.length;
                saveText("Total number of users: " + result.length, './reports/userCount.txt');

                closeConnection(db);
            });

 
            // Aggregate number of tweets per user
            collection.aggregate([
                { $group: {
                    _id: '$user_screen_name',
                    count: { $sum: 1 }
                }},
                { $sort: { 'count': -1 } },
                { $limit: 100 }
            ], function (error, result) {

                // console.log("Number of tweets per user:", JSON.stringify(result));
                reports.tweetsPerUser = result;
                saveCSV(result, ['_id', 'count'], './reports/tweetsPerUser.csv');

                closeConnection(db);
            });


            // Aggregate by hashtags
            collection.aggregate([
                { $unwind: '$hashtags' },
                { $group: {
                    _id: '$hashtags',
                    count: { $sum: 1 }
                }},
                { $sort: { 'count': -1 } },
                { $limit: 100 }
            ], function (error, result) {

                // console.log("Most frequently used hashtags:", JSON.stringify(result));
                reports.hashtags = result;
                saveCSV(result, ['_id', 'count'], './reports/hashtags.csv');

                closeConnection(db);
            });


            // Aggregate by mentions
            collection.aggregate([
                { $unwind: '$mentions' },
                { $group: {
                    _id: '$mentions',
                    count: { $sum: 1 }
                }},
                { $sort: { 'count': -1 } },
                { $limit: 100 }
            ], function (error, result) {

                // console.log("Most mentioned:", JSON.stringify(result));
                reports.mentions = result;
                saveCSV(result, ['_id', 'count'], './reports/mentions.csv');

                closeConnection(db);
            });


            // Aggregate by URLs
            collection.aggregate([
                { $unwind: '$urls' },
                { $group: {
                    _id: '$urls',
                    count: { $sum: 1 }
                }},
                { $sort: { 'count': -1 } },
                { $limit: 100 }
            ], function (error, result) {

                // console.log("Most shared URLs:", JSON.stringify(result));
                reports.urls = result;
                saveCSV(result, ['_id', 'count'], './reports/urls.csv');

                closeConnection(db);
            });


            // Find most retweeted
            collection
                .find({ text: new RegExp('^(?!RT).*', 'g') })
                .sort( { 'retweet_count': -1 } )
                .limit(100)
                .project({ twitter_id: 1, retweet_count: 1, text: 1 })
                .toArray(function (error, result) {

                    //console.log("Most retweeted:", JSON.stringify(result));
                    reports.retweets = result;
                    saveCSV(result, ['retweet_count', 'twitter_id', 'text'], './reports/retweets.csv');

                    closeConnection(db);
                });


            // Aggregate number of tweets per date
            collection.aggregate([
                { $group: {
                    _id: {
                        year: { $year : '$german_time' },
                        month: { $month : '$german_time' },
                        day: { $dayOfMonth : '$german_time' },
                    },
                    count: { $sum: 1 }
                }},

                { $sort: { 'count': -1 } }
            ], function (error, result) {

                // console.log("Number of tweets per date:", JSON.stringify(result));
                reports.tweetsPerDate = result;
                saveCSV(result, ['_id.year', '_id.month', '_id.day', 'count'], './reports/tweetsPerDate.csv');

                closeConnection(db);
            });


            // Aggregate number of tweets per date and per minute
            collection.aggregate([

                { $group: {
                    _id: {
                        year: { $year : '$german_time' },
                        month: { $month : '$german_time' },
                        day: { $dayOfMonth : '$german_time' },
                        hour: { $hour : '$german_time' },
                        minute: { $minute : '$german_time' },
                    },
                    count: { $sum: 1 }
                }},

                { $sort: { 'count': -1 } }

            ], function (error, result) {

                // console.log("Number of tweets per minute:", JSON.stringify(result));
                reports.tweetsPerMinute = result;
                saveCSV(result, ['_id.year', '_id.month', '_id.day', '_id.hour', '_id.minute', 'count'], './reports/tweetsPerMinute.csv');

                closeConnection(db);
            });
            
        } else {

            console.log(error);
            closeConnection(db);
        }
    });
}

function saveCSV(json, fields, filename) {

    json2csv({ data: json, fields: fields }, function (error, csv) {

        if (!error) {
            fs.writeFile(filename, csv, function (error) {

                if (!error) {
                    
                    console.log('File saved:', filename);
                } else {

                    console.log(error);
                }
            });
        } else {

            console.log(error);
        }
    });
}

function saveText(string, filename) {

    fs.writeFile(filename, string, function (error) {

        if (!error) {
            
            console.log('File saved:', filename);
        } else {

            console.log(error);
        }
    });
}

function closeConnection(db, force) {

    if (force) {

        db.close();
    }

    for (var key in reports) {

        if (reports.hasOwnProperty(key)) {
          
            if (!reports[key]) {

                return false;
            }
        }
    }

    db.close();
}

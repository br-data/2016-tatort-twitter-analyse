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
    var normalizedPath = require('path').join(__dirname, 'downloaded');

    fs.readdirSync(normalizedPath).forEach(function (file) {

        var ref = require('./downloaded/' + file);
        files.push(ref);
    });

    saveToMongo(files);
}

function saveToMongo(files) {

    mongoClient.connect(mongoUrl, function(error, db) {

        if (!error) {

            console.log('Connected to database', mongoUrl);
            var collection = db.collection(collectionName);
            var batch = collection.initializeOrderedBulkOp();
            
            files.forEach(function (file) {

                file.tweets.forEach(function (tweet) {

                    batch.insert(tweet);
                });
            });

            batch.execute(function(error, result) {

                if (!error) {

                    console.log('Number of entries inserted:', result.nInserted);
                    db.close();
                } else {

                    console.log(error);
                    db.close();
                }
            });
        } else {

            console.log(error);
        }
    });
}
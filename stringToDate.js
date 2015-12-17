// Convert all date strings in a MongoDB to date objects

var mongoClient = require('mongodb').MongoClient;
    
var mongoUrl = 'mongodb://localhost:27017/tatort';
var collectionName = 'tweets';

(function init() {

    stringToDate();
})();

function stringToDate() {

    mongoClient.connect(mongoUrl, function(error, db) {

    	if (!error) {

            console.log('Connected to database', mongoUrl);
            var collection = db.collection(collectionName);

			var cursor = collection.find({ german_time: { $type: 2 } });

			while (cursor.hasNext()) {

				var doc = cursor.next();
				
				db.tweets.update({_id : doc._id}, {$set : {german_time : new Date(doc.german_time)}});
				db.tweets.update({_id : doc._id}, {$set : {published_at : new Date(doc.published_at)}});
			}
		} else {

			console.log(error);
		}
	});
}

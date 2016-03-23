var fs = require('fs');
var http = require('http');
var mongoClient = require('mongodb').MongoClient;

var mongoUrl = 'mongodb://localhost:27017/tatort';
var twitterService = 'http://ddj.br.de/twitter-service/users/show/';
var userCollection = 'users';

(function init() {

  twitter();
})();

function twitter() {

  mongoClient.connect(mongoUrl, function(error, db) {

    if (!error) {

      console.log('Connected to database', mongoUrl);

      var users = db.collection(userCollection);

      // Serially iterate over all users
      // http://stackoverflow.com/a/18119789/2037629
      // users.find({ 'tweets': { '$gt': 4000 } }, function (error, cursor) {
      users.find({ 'twitter_updated' : { '$exists': false } }, function (error, cursor) {

        function processItem(error, doc) {

          if (doc === null) {

            db.close();
            return;
          }

          updateUserInfo(users, doc, function (error) {

            cursor.nextObject(processItem);
          });
        }

        cursor.nextObject(processItem);
      });

    } else {

      console.log(error);
      db.close();
    }
  });
}

function updateUserInfo(users, doc, callback) {

  // Timeout to respect the Twitter API Limit (180 requests per 15 minutes)
  // https://dev.twitter.com/rest/public/rate-limits
  setTimeout(function () {

    getTwitterData(doc.name, update);
  }, 6000);

  function update(data) {

    // @Todo Add error handling
    users.update(
      { '_id': doc._id },
      { $set: {
          twitter_updated: new Date(),
          twitter_status: data.statuses_count ? 'ok' : 'error',
          twitter_image: data.profile_image_url,
          twitter_color: data.profile_link_color,
          twitter_location: data.location,
          twitter_tweets: data.statuses_count,
          twitter_following: data.friends_count,
          twitter_followers: data.followers_count
        }
      }
    );

    callback();
    console.log('Updated ' + data.screen_name);
  }
}

function getTwitterData(username, callback) {

  http.get(twitterService + username, function (res) {

    var data = '';

    res.on('data', function (chunk) {

      data += chunk;
    });

    res.on('end', function () {

      callback(JSON.parse(data));
    });
  }).on('error', function (error) {

    console.log(error);
  });
}

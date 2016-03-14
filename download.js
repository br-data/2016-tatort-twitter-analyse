var urls = ['https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-03-10+20%3A00&end_date=2013-03-10+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-03-17+20%3A00&end_date=2013-03-17+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-03-24+20%3A00&end_date=2013-03-24+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-04-01+20%3A00&end_date=2013-04-01+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-04-07+20%3A00&end_date=2013-04-07+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-04-14+20%3A00&end_date=2013-04-14+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-04-21+20%3A00&end_date=2013-04-21+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-04-28+20%3A00&end_date=2013-04-28+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-05-12+20%3A00&end_date=2013-05-12+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-06-09+20%3A15&end_date=2013-06-09+22%3A14&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-06-16+20%3A10&end_date=2013-06-16+22%3A09&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-06-23+20%3A00&end_date=2013-06-23+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-08-18+20%3A00&end_date=2013-08-18+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-09-08+20%3A00&end_date=2013-09-08+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-09-15+20%3A00&end_date=2013-09-15+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-10-06+20%3A00&end_date=2013-10-06+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-10-20+20%3A00&end_date=2013-10-20+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-10-27+20%3A00&end_date=2013-10-27+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-11-03+20%3A00&end_date=2013-11-03+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-11-17+20%3A00&end_date=2013-11-17+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-11-24+20%3A00&end_date=2013-11-24+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-12-01+20%3A00&end_date=2013-12-01+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-12-08+20%3A00&end_date=2013-12-08+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-12-22+20%3A00&end_date=2013-12-22+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-12-26+20%3A00&end_date=2013-12-26+21%3A59&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-12-29+20%3A00&end_date=2013-12-29+21%3A59&only=tweets&limit=100000'];

var fs = require('fs');
var request = require('request');
var async = require('async');

async.eachLimit(urls, 1, function (url, callback) {

  var fileName = url.match(/\d{4}-\d{2}-\d{2}/)[0] + '.json';
  var writeStream = fs.createWriteStream('./download/' + fileName);

  writeStream.on('open', function () {

    var download = request.get(url);

    console.log("Connection opened");
    console.log("Receiving data: ");

    download.on('data', function (chunk) {

      process.stdout.write('#');
      writeStream.write(chunk);
    });

    download.on('end', function () {

      console.log('\nDownloaded:', url, 'to', fileName, '\n');
      writeStream.end();
    });
  });

  writeStream.on('close', function () {

    callback();
  });
}, function(err) {

  if (err) {

    console.log(err);
  } else {

  }
});

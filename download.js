var urls = ['https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-01+20%3A00&end_date=2014-01-01+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-05+20%3A00&end_date=2014-01-05+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-05+21%3A30&end_date=2014-01-05+23%3A30&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-19+20%3A00&end_date=2014-01-19+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-26+20%3A00&end_date=2014-01-26+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-02-02+20%3A00&end_date=2014-02-02+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-02-09+20%3A00&end_date=2014-02-09+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-02-16+20%3A00&end_date=2014-02-16+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-02-23+20%3A00&end_date=2014-02-23+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-03-02+20%3A00&end_date=2014-03-02+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-03-09+20%3A00&end_date=2014-03-09+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-03-16+20%3A00&end_date=2014-03-16+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-03-23+20%3A00&end_date=2014-03-23+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-03-30+20%3A00&end_date=2014-03-30+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-04-13+20%3A00&end_date=2014-04-13+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-04-21+20%3A00&end_date=2014-04-21+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-04-27+20%3A00&end_date=2014-04-27+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-05-04+20%3A00&end_date=2014-05-04+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-05-11+20%3A00&end_date=2014-05-11+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-05-18+20%3A00&end_date=2014-05-18+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-06-09+20%3A00&end_date=2014-06-09+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-08-31+20%3A00&end_date=2014-08-31+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-09-07+20%3A00&end_date=2014-09-07+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-09-14+20%3A00&end_date=2014-09-14+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-09-21+20%3A00&end_date=2014-09-21+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-09-28+20%3A00&end_date=2014-09-28+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-10-05+20%3A00&end_date=2014-10-05+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-10-12+20%3A00&end_date=2014-10-12+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-10-26+20%3A00&end_date=2014-10-26+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-11-16+20%3A00&end_date=2014-11-16+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-11-23+20%3A00&end_date=2014-11-23+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-11-30+20%3A00&end_date=2014-11-30+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-12-07+20%3A00&end_date=2014-12-07+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-12-21+20%3A00&end_date=2014-12-21+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-12-26+20%3A00&end_date=2014-12-26+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-12-28+20%3A00&end_date=2014-12-28+22%3A00&only=tweets&limit=100000'];

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

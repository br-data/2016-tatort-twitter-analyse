// Converts a JSON file to CSV

var json2csv = require('json2csv');

var fields = ['german_time', 'user_name', 'text'];
var json = require('./tweets2015.json');
var filename = 'tweets2015.csv';

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

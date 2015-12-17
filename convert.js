// Converts a JSON file to CSV

var json2csv = require('json2csv');

var fields = ['german_time', 'user_name', 'text'];
var json = require('./tweets2015.json');

json2csv({ data: json, fields: fields }, function (error, csv) {

    if (!error) {
        fs.writeFile('tweets2015.csv', csv, function (error) {

            if (!error) {

                console.log(error);
            } else {

                console.log('File saved');
            }
        });
    } else {

        console.log(error);
    }
});

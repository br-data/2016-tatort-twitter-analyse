// Convert the absolute timestamps to relative minutes
// tweetsPerMinuteAbs.json --> tweetsPerMinuteRel.json

var fs = require('fs');

(function init() {

  convert(require('./chart/tweetsPerMinuteAbs.json'));
})();

function convert(data) {

  // Convert absolute data
  var absoluteData = {};

  data.forEach(function (d) {

    var date = d._id.year.toString() + pad(d._id.month.toString(), 2) + pad(d._id.day.toString(), 2);
    var time = pad(d._id.hour.toString(), 2) + pad(d._id.minute.toString(), 2);

    if (absoluteData[date]) {

      absoluteData[date][time] = d.count;
    } else {

      absoluteData[date] = {};
      absoluteData[date][time] = d.count;
    }
  });

  // Convert to relative data
  var relativeData = [];

  for (var date in absoluteData) {

    var index = search('date', date, relativeData);
    var keys = Object.keys(absoluteData[date]).sort();
    var minute = 0;
    var currentDate = relativeData[index] || {};

    currentDate.values = [];

    keys.forEach(function (key) {

      if (!index) {

        currentDate.date = date;
      }

      currentDate.values.push({

        minute: minute.toString(),
        count: absoluteData[date][key]
      });

      minute++;
    });

    if (!index) {

      relativeData.push(currentDate);
    }
  }

  relativeData.forEach(function (episode) {

    // Interpolate the last value if necessary
    if (episode.values.length < 120) {

      episode.values.push({

        minute: 119,
        count: episode.values[118].count
      });
    }

    if (episode.values.length < 121) {

      episode.values.push({

        minute: 120,
        count: episode.values[119].count
      });
    }

    // Trim minutes to 120
    episode.values.length = 121;

    console.log(episode.values.length);
  });

  // Save JSON to file
  saveFile(JSON.stringify(relativeData), './chart/tweetsPerMinuteRel.json');
}

function saveFile(string, filename) {

  fs.writeFile(filename, string, function (error) {

  if (!error) {

    console.log('File saved:', filename);
  } else {

    console.log(error);
  }
  });
}

// Add leading zeros until string length is matched
function pad(number, padding, character) {

  var c = character ? character : '0';
  var p = new Array(1 + padding).join(c);

  return (p + number).slice(-p.length);
}


// Search an object array by key and value
function search(key, value, array) {

  for (var i = 0; i < array.length; i++) {

    if (array[i][key] === key) {

      return i;
    }
  }
}

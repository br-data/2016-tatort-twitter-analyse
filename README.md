# Tatort-Twitter–Tools
Sammlung an Tools um alle Tweets zum Hashtag [#Tatort](https://twitter.com/search?f=tweets&vertical=default&q=%23tatort&src=typd) zu analysieren.

### Verwendung
1. Repository klonen `git clone https://...`
2. Erforderliche Module installieren `npm install`
3. Zum Beispiel `node download.js` ausführen, um das Skript zu starten.

### download.js
Lädt Dateien von mehreren URLs in das Verzeichnis *download* herunter. Die URLs werden als Array angegeben:
```
var urls = ['https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-01+20%3A00&end_date=2014-01-01+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-05+20%3A00&end_date=2014-01-05+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-05+21%3A30&end_date=2014-01-05+23%3A30&only=tweets&limit=100000'];

```

### import.js
Importiert alle JSON-Dateien im Verzeichnis *download* in einen lokale MongoDB. Es wird nur der Key `tweets` importiert.

### stringToDate.js
Konvertiert alle Datum-Strings einer Collection in Date-Objekte:

```javascript
// vorher
"german_time" : 2015-01-01T20:00:03Z

// nachher
"german_time" : ISODate("2015-01-01T20:00:03Z")
```

### analyse.js
Aggregiert und analysiert die Tweets aus der Datenbank. Die Ergebnisse werden als CSV gespeichert.

### ranking.js
Erzeugt eine Ranking der aktivesten Twitterer zum Hashtag Tatort. Importieren mit `mongoimport --db tatort --collection users --file users.json --jsonArray`

### export.js
Exportiert die Ergebnisse einer Suchanfrage in MongoDB in eine CSV-Tabelle.

### Datenmodell
Der einzelne Tweet enthält folgende Informationen:

```javascript
{
	"_id" : ObjectId("56729662501f313a0bcb0ad3"),
	"twitter_id" : 550728175450595300,
	"text" : "Das Jahr beginnt mit einem guten Dadord #tatort",
	"published_at" : ISODate("2015-01-01T19:00:03Z"),
	"german_time" : ISODate("2015-01-01T20:00:03Z"),
	"user_id" : 230994770,
	"user_screen_name" : "der_beck",
	"user_name" : "Der Beck",
	"retweet_of" : 550728175450595300,
	"retweeted_user_id" : 230994770,
	"retweeted_user_name" : "Der Beck",
	"retweeted_user_screen_name" : "der_beck",
	"hashtags" : [
		"#tatort"
	],
	"mentions" : [ ],
	"urls" : [ ],
	"scope" : 13617,
	"twitter_query_id" : 127900108
}
```


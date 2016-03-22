# Tatort-Twitter–Tools
Sammlung an Tools um alle Tweets zum Hashtag [#Tatort](https://twitter.com/search?f=tweets&vertical=default&q=%23tatort&src=typd) zu analysieren.

### Verwendung
1. Repository klonen `git clone https://...`
2. Erforderliche Module installieren `npm install`
3. Zum Beispiel `node download.js` ausführen, um das Skript zu starten.

### Workflow
1. **download.js** lädt die Tweets für die einzelnen Tatorte als CSV-Tabellen herunter
2. **import.js** importiert die CSV-Tabellen in eine MongoDB-Collection **Tweets**.
3. **stringToDate.js** wandelt die Datum-Strings in der Datenbank in Datums-Objekte um.
4. **analyse.js** (optional) analysiert die Daten und speichert die Ergebnisse in mehreren CSV-Tabellen. Diese Auswertung dient für die redaktionelle Aufbereitung des Themas.
5. **ranking.js** berechnet welche Benutzer am meisten getwittert haben und wie viele Benutzer gleich viel getwittert haben. 

### download.js
Lädt Dateien von mehreren URLs in das Verzeichnis *download* herunter. Die URLs werden als Array angegeben:
```
var urls = ['https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-01+20%3A00&end_date=2014-01-01+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-05+20%3A00&end_date=2014-01-05+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-05+21%3A30&end_date=2014-01-05+23%3A30&only=tweets&limit=100000'];
```

### import.js
Importiert alle JSON-Dateien im Verzeichnis *download* in einen lokale MongoDB. Es wird nur der Key `tweets` importiert.

Das Tweet-Objekt ist folgendermaßen aufgebaut:
```javascript
{
  "_id": ObjectId("56729662501f313a0bcb0ad3"),
  "twitter_id": 550728175450595300,
  "text": "Das Jahr beginnt mit einem guten Dadord #tatort",
  "published_at": ISODate("2015-01-01T19:00:03Z"),
  "german_time": ISODate("2015-01-01T20:00:03Z"),
  "user_id": 230994770,
  "user_screen_name": "der_beck",
  "user_name": "Der Beck",
  "retweet_of": 550728175450595300,
  "retweeted_user_id": 230994770,
  "retweeted_user_name": "Der Beck",
  "retweeted_user_screen_name": "der_beck",
  "hashtags": ["#tatort"],
  "mentions": [],
  "urls": [],
  "scope": 13617,
  "twitter_query_id": 127900108
}
```

### stringToDate.js
Konvertiert alle Datum-Strings einer Collection in Date-Objekte:

```javascript
// vorher
"german_time": 2015-01-01T20:00:03Z

// nachher
"german_time": ISODate("2015-01-01T20:00:03Z")
```

### analyse.js
Aggregiert und analysiert die Tweets aus der Datenbank. Die Ergebnisse werden als CSV gespeichert. Folgende Analysen werden durchgeführt:
- tweetCount: Anzahl aller Tweets
- userCount: Anzahl aller User
- hashtags: Häufig verwendete Hashtags (Top 100),
- mentions: Häufig genannte Benutzer (Top 100),
- urls: Häufig verwendete URLs (Top 100),
- retweets: Häufig retweetete Tweets (Top 100),
- tweetsPerUser: User-Raking nach Tweets (Top 100),
- tweetsPerDate: Ranking der Tatort-Folgen nach Tweets,
- tweetsPerMinute: Tweets pro Minute (für den Chart)

### ranking.js
Erzeugt eine Ranking der aktivesten Twitterer zum Hashtag Tatort. Importieren mit `mongoimport --db tatort --collection users --file users.json --jsonArray`

### rankingDistribution.js
Berechnet wie viele Benutzer sich einen Rang teilen.

### convertChartData.js
Erzeugt aus Tweets pro absoluter Minute (Timestamp 2015-02-01-20-00) ein Array mit Tweets pro relativer Minute (Minute 1). Diese Daten werden für den Tatort-Tweet-Chart benötigt. 

### export.js
Exportiert die Ergebnisse einer Suchanfrage in MongoDB in eine CSV-Tabelle.



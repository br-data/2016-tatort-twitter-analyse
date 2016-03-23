# #Tatort Twitter–Analyse
Sammlung an Tools um alle Tweets zum Hashtag [#Tatort](https://twitter.com/search?f=tweets&vertical=default&q=%23tatort&src=typd) zu analysieren.

## Verwendung
1. Repository klonen `git clone https://...`
2. Erforderliche Module installieren `npm install`
3. Zum Beispiel `node download.js` ausführen, um das Skript zu starten.

**Hinweis:** Node.js bekommt standardgemäß nur 512 MB Arbeitsspeicher. Unter Umständen reicht das nicht aus und führ zu einem Fehler *FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory*. In diesem Fall kann man den verfügbaren Speicher einmalig auf 4 GB erhöhen: `node --max_old_space_size=4000000 import.js`

## Workflow
1. **download.js** lädt die Tweets für die einzelnen Tatorte als CSV-Tabellen herunter
2. **import.js** importiert die CSV-Tabellen in eine MongoDB-Collection **Tweets**.
3. **ranking.js** berechnet welche Benutzer wie viel getwittert haben (absolut) und welchen Rang sie damit einnehmen (relativ).
4. **distribution.js** wie viele Benutzer sich den gleichen Rang teilen und wie viele Benutzer schlechter sind (prozentual).
5. **twitter.js** holt für alle Benutzer die Basisdaten (Follower, Tweets, Profilbild etc.) von der Twitter-API.
6. **chartData.js** berechnet die Tweets pro Minute für den Tatort-Chart und interpoliert die fehlenden Werte.
7. **analyse.js** (optional) analysiert die Daten und speichert die Ergebnisse in mehreren CSV-Tabellen. Diese Auswertung dient für die redaktionelle Aufbereitung des Themas.

### download.js
Lädt Dateien von mehreren URLs in das Verzeichnis *download* herunter. Die URLs werden als Array angegeben:

```javascript
var urls = ['https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-01+20%3A00&end_date=2014-01-01+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-05+20%3A00&end_date=2014-01-05+22%3A00&only=tweets&limit=100000',
'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-05+21%3A30&end_date=2014-01-05+23%3A30&only=tweets&limit=100000'];
```

### import.js
Importiert alle JSON-Dateien im Verzeichnis *download* in einen lokale MongoDB. Es wird nur der Key `tweets` importiert. Außerdem werden alle alle Datums-Strings in Date-Objekte konvertiert.

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

### ranking.js
Erzeugt eine Ranking der aktivesten Twitterer zum Hashtag Tatort. Die Daten werden in der Collection **users** gespeichert:

```javascript
{
  "_id" : ObjectId("56f16a58e32637be0096da08"),
  "name" : "ardtext777",
  "tweets" : 6276,
  "rank" : 1
}
```

**Hinweis**: Der Vorgang kann bei viele Benutzer (~70.000) recht lang dauern (~15 Minuten).

### distribution.js
Berechnet wie viele Benutzer sich einen Rang teilen und wie viele Benutzer schlechter sind:

```javascript
{
  "_id" : ObjectId("56f16a58e32637be0096da08"),
  "name" : "ardtext777",
  "tweets" : 6276,
  "rank" : 1,
  "better" : 99,  // Prozent schlechter
  "same" : 0      // Prozent gleich
}
```

### twitter.js
Importiert Twitter-Daten für jeden Benutzer. Die [Twitter-API](https://dev.twitter.com/rest/public/rate-limits) hat eine Limit von 180 Anfrage pro 15 Minuten, respektive 1 Anfrage pro 5 Sekunden. Daher dauert der Import recht lange. Die Anfragen werden über den BR-Data [Proxy-Service](https://github.com/digitalegarage/twitter-api-service) gestellt. Dort ist auch der API-Key hinterlegt.

```javascript
{ _id: 56f16a58e32637be0096da08,
  name: 'ardtext777',
  tweets: 6276,
  rank: 1,
  better: 99,
  same: 0,
  twitter_status: 'ok',
  twitter_image: 'http://pbs.twimg.com/profile_images/643348384032641024/f_BVIo0t_normal.png',
  twitter_color: '0CBEEB',
  twitter_location: '',
  twitter_tweets: 16464,
  twitter_following: 151,
  twitter_followers: 1734,
  twitter_updated: Wed Mar 23 2016 11:21:00 GMT+0100 (CET)
}
```

**Hinweis**: Für 70.000 Benutzer dauert der Importvorgang circa 4 Tage.

### chartData.js
Erzeugt aus Tweets pro absoluter Minute (Timestamp 2015-02-01-20-00) ein Array mit Tweets pro relativer Minute (Minute 1). Diese Daten werden für den Tatort-Tweet-Chart benötigt.

### analyse.js
Aggregiert und analysiert die Tweets aus der Datenbank. Die Ergebnisse werden als CSV gespeichert. Folgende Analysen werden durchgeführt:
- **tweetCount**: Anzahl aller Tweets
- **userCount**: Anzahl aller User
- **hashtags**: Häufig verwendete Hashtags (Top 100),
- **mentions**: Häufig genannte Benutzer (Top 100),
- **urls**: Häufig verwendete URLs (Top 100),
- **retweets**: Häufig retweetete Tweets (Top 100),
- **tweetsPerUser**: User-Raking nach Tweets (Top 100),
- **tweetsPerDate**: Ranking der Tatort-Folgen nach Tweets,
- **tweetsPerMinute**: Tweets pro Minute (für den Chart)

### export.js
Exportiert die Ergebnisse einer MongoDB-Suchanfrage in eine CSV-Tabelle.

### convert.js
Konvertiert JSON-Dateien in CSV-Tabellen. Man kann bestimmte JSON-Felder angeben, wenn man nicht alle Daten in die Tabelle kopiert werden sollen:

```javascript
var fields = ['german_time', 'user_name', 'text'];
var json = require('./tweets2015.json');
var filename = 'tweets2015.csv';
```

## Verbesserungen
- import.js sollte mit upserts funktionieren (statt inserts)
- ranking.js und distribution.js könnte man zusammenfassen
- ranking.js Performance verbessern
- Attribut *better* in *worse* umbenennen 😉

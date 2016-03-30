var urls = [
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-04-01+20%3A00&end_date=2013-04-01+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-04-07+20%3A00&end_date=2013-04-07+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-04-14+20%3A00&end_date=2013-04-14+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-04-21+20%3A00&end_date=2013-04-21+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-04-28+20%3A00&end_date=2013-04-28+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-05-12+20%3A00&end_date=2013-05-12+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-05-20+20%3A00&end_date=2013-05-20+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-05-26+20%3A00&end_date=2013-05-26+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-06-09+20%3A15&end_date=2013-06-09+22%3A15&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-06-16+20%3A10&end_date=2013-06-16+22%3A10&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-06-23+20%3A00&end_date=2013-06-23+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-08-18+20%3A00&end_date=2013-08-18+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-09-08+20%3A00&end_date=2013-09-08+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-09-15+20%3A00&end_date=2013-09-15+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-10-06+20%3A00&end_date=2013-10-06+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-10-20+20%3A00&end_date=2013-10-20+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-10-27+20%3A00&end_date=2013-10-27+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-11-03+20%3A00&end_date=2013-11-03+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-11-17+20%3A00&end_date=2013-11-17+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-11-24+20%3A00&end_date=2013-11-24+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-12-01+20%3A00&end_date=2013-12-01+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-12-08+20%3A00&end_date=2013-12-08+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-12-22+20%3A00&end_date=2013-12-22+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-12-26+20%3A00&end_date=2013-12-26+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2013-12-29+20%3A00&end_date=2013-12-29+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-01+20%3A00&end_date=2014-01-01+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-05+20%3A00&end_date=2014-01-05+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-01-05+21%3A45&end_date=2014-01-05+23%3A45&only=tweets&limit=100000',
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
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2014-12-28+20%3A00&end_date=2014-12-28+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-01-01+20%3A00&end_date=2015-01-01+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-01-04+20%3A00&end_date=2015-01-04+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-01-11+20%3A15&end_date=2015-01-11+22%3A15&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-01-18+20%3A00&end_date=2015-01-18+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-01-25+20%3A00&end_date=2015-01-25+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-02-01+20%3A00&end_date=2015-02-01+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-02-08+20%3A00&end_date=2015-02-08+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-02-15+20%3A00&end_date=2015-02-15+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-02-22+20%3A00&end_date=2015-02-22+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-03-08+20%3A00&end_date=2015-03-08+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-03-15+20%3A00&end_date=2015-03-15+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-03-22+20%3A00&end_date=2015-03-22+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-03-29+20%3A00&end_date=2015-03-29+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-04-06+20%3A00&end_date=2015-04-06+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-04-12+20%3A00&end_date=2015-04-12+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-04-19+20%3A00&end_date=2015-04-19+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-04-26+20%3A00&end_date=2015-04-26+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-05-03+20%3A00&end_date=2015-05-03+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-05-17+20%3A00&end_date=2015-05-17+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-05-25+20%3A00&end_date=2015-05-25+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-05-31+20%3A00&end_date=2015-05-31+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-06-07+20%3A00&end_date=2015-06-07+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-06-14+20%3A00&end_date=2015-06-14+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-06-21+20%3A00&end_date=2015-06-21+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-07-05+20%3A15&end_date=2015-07-05+22%3A15&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-09-06+20%3A00&end_date=2015-09-06+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-09-13+20%3A10&end_date=2015-09-13+22%3A10&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-09-20+20%3A00&end_date=2015-09-20+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-10-11+20%3A00&end_date=2015-10-11+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-10-18+20%3A00&end_date=2015-10-18+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-10-25+20%3A00&end_date=2015-10-25+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-11-01+20%3A00&end_date=2015-11-01+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-11-08+20%3A00&end_date=2015-11-08+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-11-15+20%3A15&end_date=2015-11-15+22%3A15&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-11-22+20%3A00&end_date=2015-11-22+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-11-29+20%3A00&end_date=2015-11-29+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-12-06+20%3A00&end_date=2015-12-06+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-12-13+20%3A00&end_date=2015-12-13+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-12-26+20%3A00&end_date=2015-12-26+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2015-12-27+20%3A00&end_date=2015-12-27+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2016-01-01+20%3A00&end_date=2016-01-01+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2016-01-03+20%3A00&end_date=2016-01-03+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2016-01-10+20%3A00&end_date=2016-01-10+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2016-01-24+20%3A00&end_date=2016-01-24+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2016-01-31+20%3A00&end_date=2016-01-31+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2016-02-07+20%3A00&end_date=2016-02-07+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2016-02-14+20%3A00&end_date=2016-02-14+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2016-02-21+20%3A00&end_date=2016-02-21+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2016-02-28+20%3A00&end_date=2016-02-28+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2016-03-06+20%3A00&end_date=2016-03-06+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2016-03-13+20%3A15&end_date=2016-03-13+22%3A15&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2016-03-20+20%3A00&end_date=2016-03-20+22%3A00&only=tweets&limit=100000',
  'https://tame.it/hashtrends/results.json?api_key=hrAVY2Q4l3RP9qgKeRMm&source=global&term=%23tatort&start_date=2016-03-28+20%3A00&end_date=2016-03-28+22%3A00&only=tweets&limit=100000'
];

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

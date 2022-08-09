/**
 * Created by lusinabrian on 24/09/16.
 */
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';
const age = process.argv[2];
mongo.connect(url, (err, db) => {
  if (err) {
    throw err;
  }
  const collection = db.collection('parrots');
  collection.count(
    {
      age: {
        $gt: Number(age),
      },
    },
    (err, count) => {
      if (err) {
        throw err;
      }
      console.log(count);
      db.close();
    },
  );
});

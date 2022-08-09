/**
 * Created by lusinabrian on 24/09/16.
 */
const mongo = require('mongodb').MongoClient;
const age = process.argv[2];
const url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err, db) => {
  if (err) {
    throw err;
  }
  const parrots = db.collection('parrots');
  parrots
    .find(
      {
        age: {
          $gt: Number(age),
        },
      },
      {
        name: 1,
        age: 1,
        _id: 0,
      },
    )
    .toArray((err, documents) => {
      if (err) {
        throw err;
      }
      console.log(documents);
      db.close();
    });
});

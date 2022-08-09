/**
 * Created by lusinabrian on 24/09/16.
 */

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url, (err, db) => {
  if (err) {
    throw err;
  }
  const collection = db.collection(process.argv[3]);
  collection.remove(
    {
      _id: process.argv[4],
    },
    (err) => {
      if (err) {
        throw err;
      }
      db.close();
    },
  );
});

/**
 * Created by lusinabrian on 24/09/16.
 */
const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'
const size = process.argv[2]

mongo.connect(url, (err, db) => {
  if (err) {
    throw err
  }
  const collection = db.collection('prices')
  const match = { $match: { size: size } }
  const group = {
    $group: {
      _id: 'average',
      average: {
        $avg: '$price'
      }
    }
  }
  collection.aggregate([match, group]).toArray(function (err, results) {
    if (err) {
      throw err
    }
    if (!results.length) {
      throw new Error('No results were found')
    }
    const m = results[0]
    console.log(Number(m.average).toFixed(2))
    db.close()
  })
})

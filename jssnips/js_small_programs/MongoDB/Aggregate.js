/**
 * Created by lusinabrian on 24/09/16.
 */
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var size = process.argv[2];

mongo.connect(url, (err, db) => {
	if (err) {
		throw err;
	}
	var collection = db.collection('prices');
	var match = {$match: {size: size}};
	var group = {$group: {
		_id: 'average',
		average: {
			$avg: '$price'
		}
	}};
	collection.aggregate([match, group]).toArray(function (err, results) {
		if (err) {
			throw err;
		}
		if (!results.length) {
			throw new Error('No results were found');
		}
		var m = results[0];
		console.log(Number(m.average).toFixed(2));
		db.close();
	});
});

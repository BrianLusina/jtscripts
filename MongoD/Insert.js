/**
 * Created by lusinabrian on 24/09/16.
 */
var mongo = require('mongodb').MongoClient;

var doc = {
    firstName : process.argv[2],
    lastName : process.argv[3]
};

var url = 'mongodb://localhost:27017/learnyoumongo';

// connect to mongo db via a URL, and handle callback
mongo.connect(url, (err, db) =>{
   if(err) throw err;
    var collection = db.collection('docs');
    collection.insert(doc, (err, data)=>{
        if(err) throw err;
        console.log(JSON.stringify(doc));
        //close the database connection
        db.close();
    });
});
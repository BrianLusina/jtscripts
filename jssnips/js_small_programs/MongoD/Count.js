/**
 * Created by lusinabrian on 24/09/16.
 */
var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var age = process.argv[2];
mongo.connect(url, (err, db)=>{
    if(err) throw err;
    var collection = db.collection("parrots");
    collection.count({
        age:{
            $gt: +age
        }
    }, (err, count) =>{
        if(err) throw err;
        console.log(count);
        db.close();
    });
});
/**
 * Created by lusinabrian on 24/09/16.
 */
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/'+process.argv[2];

mongo.connect(url, (err, db) => {
    if(err) throw err;
    var collection = db.collection('users');
    collection.update({
        username:'tinatime'
    },{
        $set:{
            age:40
        }
    }, (err)=>{
        if(err) throw err;
        db.close();
    });
});
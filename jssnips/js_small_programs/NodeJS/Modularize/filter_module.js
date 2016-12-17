var fs = require('fs');
var path = require('path');

function filereader(directory, fileExt, callback){
    fs.readdir(directory,(err, data) => {
        //early callback
        if(err) return callback(err);
        
        data = data.filter((d) => {
            return path.extname(d) === "." + fileExt;
        });
        callback(null, data);
    });
}

module.exports = filereader
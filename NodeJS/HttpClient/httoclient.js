var http = require('http');

http.get(process.argv[2], (response) =>{
    response.on("data", function(data){
        console.log(data);
    });
});
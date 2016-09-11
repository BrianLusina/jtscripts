var fs = require('fs');
var http = require('http');

// create the server
var server = http.createServer((request, response) => {
    response.writeHead(200, {"content-type" : "text/plain"});
    fs.createReadStream(process.argv[3].pipe(response));
});

// listen on the port provided
server.listen(+process.argv[2]);
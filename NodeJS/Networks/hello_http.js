var http = require('http');

http.createServer((request, response) => {
    response.writeHead(200); //status code in header
    response.write("Hello world"); //write body
    response.end(); //end connection
});
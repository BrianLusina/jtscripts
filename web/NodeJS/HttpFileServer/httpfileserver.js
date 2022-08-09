const fs = require('fs');
const http = require('http');

// create the server
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/plain' });
  fs.createReadStream(process.argv[3]).pipe(response);
});

// listen on the port provided
server.listen(Number(process.argv[2]));

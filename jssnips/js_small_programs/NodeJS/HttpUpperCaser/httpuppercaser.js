var http = require('http');
var map = require('through2-map');

var server = http.createServer((request, response) => {
	if (request.method != 'POST') {
		return response.end('Send me a post\n');
	}
	request.pipe(map(chunk => {
		return chunk.toString().toUpperCase();
	})).pipe(response);
});

server.listen(Number(process.argv[2]));

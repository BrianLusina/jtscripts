var http = require('http');
var url = require('url');

// return a JSON object with the hour minute and second
function parseTime(time){
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
    }
}

// returns a JSON response with time in unix
function unixTime(time){
    return {unixtime: time.getTime()};
}

var server = http.createServer((request, response) => {
    var parseUrl = url.parse(request.url, true);
    var time = new Date(parseUrl.query.iso);
    var result;

    if (/^\/api\/parsetime/.test(request.url))
        result = parseTime(time);
    else if (/^\/api\/unixtime/.test(request.url))
        result = unixTime(time);
    
    if (result) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(result));
    } else {
        response.writeHead(404);
        response.end();
    }
});


server.listen(+process.argv[2]);
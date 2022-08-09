const http = require('http');
const url = require('url');

// return a JSON object with the hour minute and second
function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
}

// returns a JSON response with time in unix
function unixTime(time) {
  return { unixtime: time.getTime() };
}

const server = http.createServer((request, response) => {
  const parseUrl = url.parse(request.url, true);
  const time = new Date(parseUrl.query.iso);
  let result;

  if (/^\/api\/parsetime/.test(request.url)) {
    result = parseTime(time);
  } else if (/^\/api\/unixtime/.test(request.url)) {
    result = unixTime(time);
  }

  if (result) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(result));
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen(Number(process.argv[2]));

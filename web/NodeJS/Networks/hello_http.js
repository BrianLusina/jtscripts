const http = require('http')

http.createServer((request, response) => {
  response.writeHead(200) // status code in header
  response.write('Hello world') // write body
  setTimeout(function () {
    response.write('Long running process')
    response.end() // end connection
  }, 5000)
}).listen(8080)

console.log('Listening on port 8080')

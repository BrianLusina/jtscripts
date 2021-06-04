const http = require('http')
const bl = require('bl')
const output = []
let c = 0

for (let x = 0; x < 3; x++) {
  httpResponse(x)
}

function print () {
  for (let i = 0; i < 3; i++) {
    console.log(output[i])
  }
}

function httpResponse (indx) {
  http.get(process.argv[2 + indx], response => {
    response.pipe(bl(function (err, data) {
      if (err) {
        console.error(err)
      }
      output[indx] = data.toString()
      c++

      if (c === 3) {
        print()
      }
    }))
  })
}

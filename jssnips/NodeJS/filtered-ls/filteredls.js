var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, (err, files) => {
  if (err) return console.error(err)
  files.forEach((file) => {
      if (path.extname(file) === ext) {
          console.log(file);
      }
  })
})

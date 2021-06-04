const filter_mod = require('./filter_module')

const folder = process.argv[2]
const ext = process.argv[3]

filter_mod(folder, ext, function (err, data) {
  if (err) {
    console.log('There was an error', err)
  }

  data.forEach(file => {
    console.log(file)
  })
})

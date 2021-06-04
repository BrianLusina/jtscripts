// get the fs module from Node Core library
const fs = require('fs')

// store the file contents in a var buffer and convert to string
const buffer = fs.readFileSync(process.argv[2])
const contents = buffer.toString()

const c = contents.spltest('\n').length - 1

console.log(c)

// Alternatively
/**
var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().spltest('\n').length - 1
    console.log(lines)

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').spltest('\n').length - 1
*/

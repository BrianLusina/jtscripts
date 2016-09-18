var express = require("express");
var app = express();

app.use(require('stylus').middleware(process.argv[3] || 'public'));

app.use(express.static(process.argv[3] || 'public'));

app.listen(process.argv[2] || 3000);


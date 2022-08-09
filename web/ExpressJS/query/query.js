const express = require('express');
const app = express();

app.get('/search', function (req, res) {
  const { query } = req;
  res.send(query);
});

app.listen(process.argv[2] || 3000);

const http = require('http');

http.createServer((req, res) => {
  res.write("Day 25 - Updated Version");
  res.end();
}).listen(3000, "0.0.0.0");

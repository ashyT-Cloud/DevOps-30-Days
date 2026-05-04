const http = require('http');

http.createServer((req, res) => {
  res.write("Day 20 Productin App Running");
  res.end();
}).listen(3000, "0.0.0.0");

const http = require('http');

const server = http.createServer((req, res) => {
  res.write("Day 15 CI/CD Working");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000")
});

// trigger redeployment

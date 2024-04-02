// const http = require('node:http'); common js syntax

import http from "http"       //module js


const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello world\n</h1>");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
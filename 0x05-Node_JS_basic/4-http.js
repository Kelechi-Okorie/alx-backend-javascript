/* Creat http server */

const http = require('http');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200);
  res.end('Hello Holberton School!');
});
app.listen(1245, () => {
  console.log('Listening on port 1245');
});
module.exports = app;

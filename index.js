const http = require('http');

const handler = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.write('Hello world!');
  res.end();
};

const server = http.createServer(handler);

server.listen(223);

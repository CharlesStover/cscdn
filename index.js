const fs = require('fs');
const https = require('https');

const options = {
  ca: fs.readFileSync('/etc/letsencrypt/live/cscdn.net/chain.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/cscdn.net/cert.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/cscdn.net/privkey.pem')
};

const handler = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
  });
  res.write('Hello world!');
  res.end();
};

const server = https.createServer(options, handler);

server.listen(443);

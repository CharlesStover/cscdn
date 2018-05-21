const fs = require('fs');

// Production
if (fs.existsSync('/etc/letsencrypt/live/cscdn.net')) {
  module.exports = {
    ca: fs.readFileSync('/etc/letsencrypt/live/cscdn.net/chain.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/cscdn.net/cert.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/cscdn.net/privkey.pem')
  };
}

// Development (self-signed)
else {
  module.exports = {
    cert: fs.readFileSync('./cert/cscdn.crt'),
    key: fs.readFileSync('./cert/cscdn.key')
  };
}

const fs = require('fs');

const letsEncrypt = fs.existsSync('/etc/letsencrypt/live/cscdn.net');

module.exports = {
  ca:
    letsEncrypt ?
      fs.readFileSync('/etc/letsencrypt/live/cscdn.net/chain.pem') :
      null,
  cert: fs.readFileSync(
    letsEncrypt ?
      '/etc/letsencrypt/live/cscdn.net/cert.pem' :
      './cert/cscdn.crt'
  ),
  key: fs.readFileSync(
    letsEncrypt ?
      '/etc/letsencrypt/live/cscdn.net/privkey.pem' :
      './cert/cscdn.key'
  )
};

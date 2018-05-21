const prod = fs.existsSync('/etc/letsencrypt/live/cscdn.net');

export default {
  ca:
    prod ?
      fs.readFileSync('/etc/letsencrypt/live/cscdn.net/chain.pem') :
      null,
  cert:
    prod ?
      fs.readFileSync('/etc/letsencrypt/live/cscdn.net/cert.pem') :
      null,
  key:
    prod ?
      fs.readFileSync('/etc/letsencrypt/live/cscdn.net/privkey.pem') :
      null
};

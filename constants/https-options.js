const prod = fs.existsSync('/etc/letsencrypt/live/cscdn.net');

export default {
  ca:
    prod ?
      fs.readFileSync('/etc/letsencrypt/live/cscdn.net/chain.pem') :
      null
  ),
  cert: fs.readFileSync(
    prod ?
      '/etc/letsencrypt/live/cscdn.net/cert.pem' :
      '../cert/cscdn.crt'
  ),
  key: fs.readFileSync(
    prod ?
      '/etc/letsencrypt/live/cscdn.net/privkey.pem' :
      '../cert/cscdn.key'
  )
};

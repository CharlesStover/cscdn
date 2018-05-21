const https = require('https');
const httpsOptions = require('./constants/https-options');
const httpsRequestListener = require('./constants/https-request-listener');

const server = https.createServer(httpsOptions, httpsRequestListener);
server.listen(443);

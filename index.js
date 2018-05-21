import fs from 'fs';
import https from 'https';
import httpsOptions from './constants/https-options';
import httpsRequestListener from './constants/https-request-listener';

const server = https.createServer(httpsOptions, httpsRequestListener);
server.listen(443);

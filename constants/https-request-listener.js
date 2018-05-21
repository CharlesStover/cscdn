const fs = require('fs');
const url = require('url');
const withSecurity = require('./with-security');

// TODO: Use Express?
module.exports = withSecurity((request, response) => {
  const requestUrl = url.parse(request.url);
  switch (requestUrl.pathname) {

    // favicon.ico
    case '/favicon.ico':
      response.writeHead(200, {
        'Content-Type': 'image/x-icon'
      });
      response.write(fs.readFileSync('./assets/favicon.ico'));
      break;

    // 404
    default:
      response.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      response.write('Hello world!');
      break;
  }
  response.end();
});

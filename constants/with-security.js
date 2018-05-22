const contentSecurityPolicy = `\
connect-src: 'none'; \
default-src: 'none'; \
font-src: 'none'; \
form-action: 'none'; \
frame-src: 'none'; \
img-src: 'none'; \
media-src: 'none'; \
object-src: 'none'; \
report-to: 'csp-enforce'; \
report-uri: 'https://cscdn.report-uri.com/r/d/csp/enforce'; \
script-src: 'none'; \
style-src: 'none'\
`;

const reportTo = [
  {
    endpoints: [
      {
        url: 'https://cscdn.report-uri.com/r/d/csp/enforce'
      }
    ],
    group: 'csp-enforce',
    'max-age': 31536000
  }
];

module.exports = (f) => {
  return (request, response) => {
    response.setHeader('Content-Security-Policy', contentSecurityPolicy);
    response.setHeader('Expect-CT', 'enforce, max-age=31536000, report-uri="https://cscdn.report-uri.com/r/d/ct/enforce"');
    response.setHeader('Referrer-Policy', 'no-referrer');
    response.setHeader('Report-To', reportTo.map((group) => JSON.stringify(group)).join(', '));
    response.setHeader('Server', 'Charles Stover');
    response.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader('X-Frame-Options', 'DENY');
    resposne.setHeader('X-XSS-Protection', '1; mode=block; report=https://cscdn.report-uri.com/r/d/xss/enforce');
    f(request, response);
  };
};

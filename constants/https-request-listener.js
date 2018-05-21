export default (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
  });
  res.write('Hello world!');
  res.end();
};

module.exports = (f) => {
  return (request, response) => {
    response.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    f(request, response);
  };
};

const http = require('http');

const parseCookies = (cookies='') => {
  return cookies
    .split(';')
    .map(v => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});
};

http.createServer((req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  for (var prop in cookies) {
    if (!cookies.hasOwnProperty(prop)) {
        continue;
    }    
    res.clearCookie(prop);
  }
  res.redirect('/');
}).listen(8080, _ => {
  console.log('http://localhost:8080');
})


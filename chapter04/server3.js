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
  console.log(req.url, cookies);
  // console.log(req.headers.cookie);
  res.writeHead(200, {'Set-Cookie': 'myCookie=test'});
  res.end('Hello Cookies');
}).listen(8080, _ => {
  console.log('http://localhost:8080');
})


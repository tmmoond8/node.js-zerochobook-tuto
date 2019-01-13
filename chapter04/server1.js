const http = require('http');

http.createServer((req, res) => {
  res.write('<h1>Hello node!!</h1>');
  res.end('<p>Hello node Server!</p>');
}).listen(8080, _ => {
  console.log('8080으로 서버가 열렸습니다.', `http://localhost:8080`);
})
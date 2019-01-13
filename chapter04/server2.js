const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('./server2.html', (err, data) => {
    if(err) res.write('<h1>errror</h1>');
    res.end(data);
  })
}).listen(8080, _ => {
  console.log('server listen : ', 'http://localhost:8080');
})
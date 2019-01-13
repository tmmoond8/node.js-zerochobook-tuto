const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster) {
  console.log(`마스터 프로세스 아이디 ${process.pid}`);
  // CPU 개수만큼 워커를 생성
  for(let i = 0; i < numCPUs; i ++) {
    cluster.fork();
  }
  // 워커가 종료되었을 때
  cluster.on('exit', (worker, code, signal) => {
    console.log(`${worker.process.pid}번 워커가 종료되었습니다`);
  });
} else {
  // 워커들이 포트에서 대기
  http.createServer((req, res) => {
    res.write('<h1> Hello Node</h1>');
    res.end(`<p>node pid: ${process.pid}</p>`);
    setTimeout(_ => {
      process.exit(1);
    }, 1000);
  }).listen(8080);
  console.log(`${process.pid}번 워커 실행`);
}
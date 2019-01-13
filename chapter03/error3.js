process.on('uncaughtException', err => {
  console.error('예기치 못한 에러', err);
})

setInterval(_ => {
  throw new Error('서버를 고장내자');
}, 1000);

setTimeout(_ => {
  console.log('실행 중 ..');
}, 2000);


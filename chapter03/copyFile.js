const fs = require('fs');

fs.copyFile('./test3232.txt', 'copy.txt', err => {
  if(err) return console.error(err);
  console.log('복사 완료');
});
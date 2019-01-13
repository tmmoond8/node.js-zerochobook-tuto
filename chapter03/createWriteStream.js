const fs = require('fs');
const writeStream = fs.createWriteStream('./writeStream.txt');
writeStream.on('finish', _ => {
  console.log('스트림 쓰기 완료');
});

writeStream.write('이걸 쓰는거지');
writeStream.write('이걸 쓰는거지\n');
writeStream.write('이걸 쓰는거지');
writeStream.end();
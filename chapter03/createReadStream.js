const fs = require('fs');

const readStream = fs.createReadStream('./stream.txt', { highWaterMark: 16 });
const data = [];

readStream.on('data', chunk => {
  data.push(chunk);
  console.log('data :', chunk, chunk.length);
})

readStream.on('end', _ => {
  console.log('end :', Buffer.concat(data).toString(), data.length);
})
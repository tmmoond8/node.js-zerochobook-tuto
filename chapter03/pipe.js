const fs = require('fs');
const readStream = fs.createReadStream('./writeTest.txt');
const writeStream = fs.createWriteStream('./pipe.txt');
readStream.pipe(writeStream);
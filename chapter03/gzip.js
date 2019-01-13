const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./test.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./test.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);
const fs = require('fs');

console.log('start');
const data1 = fs.readFileSync('./test.txt');
console.log('1번', data1.toString());
const data2 = fs.readFileSync('./test.txt');
console.log('2번', data2.toString());
const data3 = fs.readFileSync('./test.txt');
console.log('3번', data3.toString());
console.log('end');
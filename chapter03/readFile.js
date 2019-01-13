const fs = require('fs');
const util = require('util');
fs.readFile('./test.txt', (err, data) => {
  if(err) throw err;
  console.log(data);
  console.log(data.toString());
});

// const promisedReadFile = util.promisify(fs.readFile);
// promisedReadFile('./test1.txt').then(data => {
//   console.log(data);
//   console.log(data.toString());
// }).catch(err => {
//   console.error(err);
// })

// const test = (num, num2, callback) => {
//   setTimeout(_ => {
//     if(num === num2) {
//       callback('err', null);
//     } else {
//       callback(null, num);
//     }
//   }, 1000)
// }

// test(1, 2, (err, data) => {
//   if(err) throw err;
//   console.log(data);
// })
// const promisedTest = util.promisify(test);

// promisedTest(1, 1).then((data, a, b, c) => console.log(data, a, b, c)).catch(err => console.error(err));
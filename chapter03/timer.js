const timeout = setTimeout(() => {
  console.log('1.5');
}, 1500);

const interval = setInterval(() => {
  console.log('1....')
}, 1000);

const timeout2 = setTimeout(() => {
  console.log('3');
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearTimeout(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log('imm');
});

console.log('vnvvnnvn');
const immediate2 = setImmediate(() => {
  console.log('imm2');
});

clearImmediate(immediate2);
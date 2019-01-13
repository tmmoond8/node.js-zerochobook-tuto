const { odd, even } = require('./module');

function checkOddOrEven(num) {
  return num % 2 ? odd : even;
}

module.exports = checkOddOrEven;
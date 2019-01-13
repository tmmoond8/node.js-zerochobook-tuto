import { odd, even } from './module';

function checkOddOrEven(num) {
  return num % 2 ? odd : even;
}

export default checkOddOrEven;
const condition = false;
const promise = new Promise((resolve, reject) => {
  if(condition) {
    resolve('success');
  } else {
    reject('fail');
  }
});
promise.then((msg) => {
  console.log(msg);
}).catch((err) => {
  console.log(err);
});
const fs = require('fs');
const contents = '글이 입력이 됩니다.';
fs.writeFile('./writeTest.txt', contents, (err) => {
  if(err) throw err;
  fs.readFile('./writeTest.txt', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
  })
})
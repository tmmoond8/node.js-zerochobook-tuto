const fs = require('fs');
setInterval(_ => {
  fs.unlink('./abcsdfsf', err => {
    if(err) console.error(err);
  })
}, 1000);
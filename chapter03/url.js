const url = require('url');
const URL = url.URL;
const myURL = new URL('http://www.node.github.co.kr:3939/book/bookList.aspx?serctate1=0010010000#anchor'); //WAHTWG
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('-----------------------');

const parsedUrl = url.parse('http://www.node.github.co.kr:3939/book/bookList.aspx?serctate1=0010010000#anchor');
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));
console.log('-----------------------');
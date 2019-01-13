// WHATWG 방식이 아닌 노드의 Url을 사용할 때 search 부분을 사용하기 쉽게 객체로 만드는 모듈
const url = require('url');
const queryString = require('querystring');

const parsedUrl = url.parse('http://www.github.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = queryString.parse(parsedUrl.query);
console.log('queryString.parse():', query);
console.log('queryString.stringify():', queryString.stringify(query));
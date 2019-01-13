console.log(process.version);
console.log(process.arch);
console.log(process.platform);
console.log(process.pid);
console.log(process.uptime());
console.log(process.execPath);
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log('timeout');
})

setImmediate(() => {
  console.log('imm');
})

Promise.resolve().then(() => console.log('promise'));

process.nextTick(() => {
  console.log('tick');
})

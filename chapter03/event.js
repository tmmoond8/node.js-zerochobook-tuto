const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', _ => {
  console.log('event1');
})
myEvent.on('event2', _ => {
  console.log('event2');
})
myEvent.on('event2', _ => {
  console.log('event2 추가');
})

myEvent.emit('event1');
myEvent.emit('event2');

myEvent.once('event3', _ => {
  console.log('event3');
})

myEvent.emit('event3');
myEvent.emit('event3 ');

myEvent.on('event4', _ => {
  console.log('event 4');
})

myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listner = _ => {
  console.log('event 5');
}

myEvent.on('event5', listner);
myEvent.removeListener('event5', listner);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));
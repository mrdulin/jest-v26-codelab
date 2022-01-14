const EventEmitter = require('events').EventEmitter;
let main = () => {
  let client = getClient();
  client.on('connected', () => {
    console.log('connected');
  });
  client.on('error', () => {
    console.log('error');
  });
};

let getClient = () => {
  let e = new EventEmitter();
  setTimeout(() => {
    if (Date.now() % 2) {
      e.emit('connected');
    } else {
      e.emit('error');
    }
  }, 100);

  return e;
};
module.exports = main;

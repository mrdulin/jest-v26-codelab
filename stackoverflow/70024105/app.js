const initializer = require('./dependencyInitializer');

const sock = initializer.zmqSock();
const ws = initializer.wsClient();

ws.on('update', (data) => {
  sock.send([data.topic, JSON.stringify(data)]);
});

module.exports = { sock, ws };

const app = require('./app');
const initializer = require('./dependencyInitializer');

jest.mock(
  './dependencyInitializer',
  () => {
    const EventEmitter = require('events');
    const emitter = new EventEmitter();
    const mSock = { send: jest.fn() };
    return {
      wsClient: jest.fn(() => emitter),
      zmqSock: jest.fn(() => mSock),
    };
  },
  { virtual: true }
);
describe('on message received from websocket', () => {
  it('should pass it to zmq', () => {
    const data = { result: 'ok' };

    expect(initializer.wsClient).toHaveBeenCalledTimes(1);
    expect(initializer.zmqSock).toHaveBeenCalledTimes(1);

    const _sock = initializer.zmqSock();
    const _ws = initializer.wsClient();

    // check if they have same reference
    expect(app.sock).toBe(_sock);
    expect(app.ws).toBe(_ws);

    _ws.emit('update', data);
    expect(_sock.send).toHaveBeenCalledTimes(1);
  });
});

const amqp = require('amqplib/callback_api');
const rabbitConsumer = require('./');

describe('rabbitConsumer', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  test('should pass', () => {
    const mData = {
      content: 'teresa teng',
    };
    const mChannel = {
      assertQueue: jest.fn(),
      consume: jest.fn().mockImplementation((queue, callback) => {
        callback(mData);
      }),
    };
    const mConnection = {
      createChannel: jest.fn().mockImplementation((callback) => {
        callback(null, mChannel);
      }),
    };
    jest.spyOn(amqp, 'connect').mockImplementation((url, callback) => {
      callback(null, mConnection);
    });
    const mIO = {
      emit: jest.fn(),
    };
    rabbitConsumer(mIO);
    jest.advanceTimersByTime(10000);
    expect(amqp.connect).toBeCalledWith('amqp://rabbitmq', expect.any(Function));
    expect(mConnection.createChannel).toBeCalledWith(expect.any(Function));
    expect(mChannel.assertQueue).toBeCalledWith('message', { durable: false });
    expect(mChannel.consume).toBeCalledWith('message', expect.any(Function), { noAck: true });
  });
});

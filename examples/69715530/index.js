const amqp = require('amqplib/callback_api');

const rabbitConsumer = (io) => {
  setTimeout(() => {
    amqp.connect('amqp://rabbitmq', (error0, connection) => {
      if (error0) {
        throw error0;
      }
      connection.createChannel((error1, channel) => {
        if (error1) {
          throw error1;
        }
        const queue = 'message';
        channel.assertQueue(queue, { durable: false });
        console.log(' [*] Waiting for message', queue);
        channel.consume(
          queue,
          (data) => {
            console.log(' [x] Received data:', data.content.toString('utf-8'));
            io.emit('sendMessage', data.content.toString('utf-8'));
          },
          { noAck: true }
        );
      });
    });
  }, 10000);
};

module.exports = rabbitConsumer;

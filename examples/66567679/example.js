const got = require('got');

const example = async (event, context, callback) => {
  let message;

  const gotOptions = {
    json: {
      process: event.process,
    },
    responseType: 'json',
  };

  const res = await got.post('https://some.url/api/process', gotOptions).catch((error) => {
    callback(error);
  });

  console.log('process');
  message = `Process ${event.process} is: ${res.body.active}`;

  callback(null, message);
};

exports.example = example;

const app = require('express')();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send(Buffer.from('<p>some html</p>'));
});

module.exports = app;

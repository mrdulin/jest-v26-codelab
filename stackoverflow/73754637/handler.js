const request = require('request');

const someTaskUrl = 'http://localhost:3000/api'
async function getSomeTask(res) {
  request.get({ url: someTaskUrl }, (response, body) => {
    if (response.statusCode === 200) {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.write(body);
      res.end();
      return;
    }
    const errorMessage = 'Failed';
    res.status(400).json({ error: errorMessage });
  });
}

module.exports = {
  getSomeTask,
};

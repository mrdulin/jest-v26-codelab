const http = require('http');
const { xhrExample } = require('./exampleXHR');

describe('71021143', () => {
  let server;
  beforeEach((done) => {
    server = http
      .createServer((req, res) => {
        const body = JSON.stringify({ name: 'amelia' });
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        });
        res.write(body);
        res.end();
      })
      .listen(8000, done);
  });
  afterEach((done) => {
    server.close(done);
  });
  test('should pass', (done) => {
    expect.assertions(1);
    xhrExample({
      method: 'POST',
      url: 'http://localhost:8000',
      onSuccess: (res) => {
        console.log(res);
        expect(res).toEqual({ name: 'amelia' });
        done();
      },
    });
  });
});

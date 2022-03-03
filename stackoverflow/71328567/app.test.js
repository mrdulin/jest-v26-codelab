const app = require('./app');
const request = require('supertest');

describe('71328567', () => {
  test('should pass', async () => {
    const res = await request(app).get('/');
    expect(res.type).toBe('text/html');
    expect(res.text).toBe('<p>some html</p>');
  });
});

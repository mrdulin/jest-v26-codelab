const request = require('supertest');
const app = require('./app');

describe('22326420', () => {
  it('should pass', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatchInlineSnapshot(
      `"<html><head><title>Hey</title></head><body><h1>Hello there!</h1></body></html>"`
    );
  });
});

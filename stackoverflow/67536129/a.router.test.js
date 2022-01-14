import a from './a.router';
import express from 'express';
import supertest from 'supertest';

describe('API Calls', () => {
  const app = express();
  let request;

  beforeAll(() => {
    app.use(a);
    request = supertest(app);
  });

  test('Successful call to post /', async () => {
    const body = {
      Hello: 'Not Hello',
    };
    const res = await request
      .post('/')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'authToken')
      .send(body);
    expect(res.text).toEqual('Not Equal');
  });

  test('should handle error', async () => {
    const body = {
      hello: 'hello',
    };
    const res = await request
      .post('/')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'authToken')
      .send(body);
    expect(res.text).toEqual('Error: Equal');
  });
});

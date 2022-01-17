import { basicTests } from './basicTests';
import request from 'supertest';
import { app } from './app';

describe('GET /some/api/route', () => {
  basicTests(app, '/some/api/check');
  let res;
  beforeAll(async () => {
    const response = await request(app).get('/some/api/check');
    res = { ...response };
  });
  test('should return data', () => {
    expect(res.body.data).toBe('a');
  });
});

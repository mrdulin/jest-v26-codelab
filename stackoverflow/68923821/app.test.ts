import request from 'supertest';
import { createApp } from './app';

describe('68923821', () => {
  test('error should be handled and return 500', async () => {
    const underlyingFunction = jest.fn().mockImplementation(() => {
      throw new Error('Something went wrong');
    });
    const app = createApp(underlyingFunction);
    const res = await request(app).get('/my-endpoint');
    expect(res.status).toEqual(500);
  });
});

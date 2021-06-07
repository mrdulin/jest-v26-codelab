const request = require('supertest');
const app = require('./routes');
const services = require('./services');

it('responds with 200 when successful', async () => {
  const spy = jest.spyOn(services, 'fetchSamplesFromDb');
  const response = await request(app).get('/fetch-samples');
  expect(response.status).toBe(200);
  expect(spy).toHaveBeenCalled();
});

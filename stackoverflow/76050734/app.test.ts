import request from 'supertest';
import { app } from './app';
import { Person } from './person';

const getNameSpy = jest.spyOn(Person.prototype, 'getName');

describe('User route', () => {
  it('Should return name', async () => {
    await request(app).post('/user').send({ name: 'john' });
    expect(getNameSpy).toHaveBeenCalledTimes(1);
  });
});

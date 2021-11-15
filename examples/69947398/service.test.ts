import * as service from './service';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('getData', () => {
  it('test success', async () => {
    const mock = new MockAdapter(axios);

    mock.onGet(`${service.baseURL}/sites`).reply(200, 'success');
    const axiosSpy = jest.spyOn(axios, 'get');

    const rtn = await service.getData('/sites');

    expect(axiosSpy).toHaveBeenCalled();
    expect(rtn).toBe('success');
  });
  it('test failure', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet(`${service.baseURL}/sites`).networkError();
    const rtn = await service.getData('/sites').catch((err) => {
      expect(err.message).toBe('Network Error');
    });
    expect(rtn).toBe(undefined);
  });
  it('test failure 2', async () => {
    const mock = new MockAdapter(axios);

    mock.onGet(`${service.baseURL}/sites`).networkError();
    await expect(service.getData('/sites')).rejects.toThrowError('Network Error');
  });
});

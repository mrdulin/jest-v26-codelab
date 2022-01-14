import axios from 'axios';
import client from './';

jest.mock('axios', () => jest.fn(() => Promise.resolve('teresa teng')));

describe('Client', () => {
  it('should call axios and return a response', async () => {
    const response = await client.createRequest('http://localhost/', 'GET');
    expect(axios).toHaveBeenCalled();
    expect(response).toEqual('teresa teng');
  });
});

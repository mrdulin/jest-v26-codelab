import fetchFun from './fetchFun';
import fetch from 'node-fetch';
import { mocked } from 'ts-jest/utils';
const { Response } = jest.requireActual('node-fetch');

jest.mock('node-fetch');

const mockedFetch = mocked(fetch);

describe('65386717', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should get html', async () => {
    const mRes = new Response('<div>test html</div>', {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
    jest.spyOn(mRes, 'text');
    mockedFetch.mockResolvedValueOnce(mRes);
    const actual = await fetchFun('http://localhost/api', { method: 'get' });
    expect(actual).toBe('<div>test html</div>');
    expect(mockedFetch).toBeCalledWith('http://localhost/api', { method: 'get' });
    expect(mRes.text).toBeCalledTimes(1);
  });

  it('should get json', async () => {
    const mRes = new Response(JSON.stringify({ name: 'teresa teng' }), {
      status: 200,
    });
    jest.spyOn(mRes, 'json');
    mockedFetch.mockResolvedValueOnce(mRes);
    const actual = await fetchFun('http://localhost/api', { method: 'get' });
    expect(actual).toEqual({ name: 'teresa teng' });
    expect(mockedFetch).toBeCalledWith('http://localhost/api', { method: 'get' });
    expect(mRes.json).toBeCalledTimes(1);
  });

  it('should throw error', async () => {
    const mRes = new Response(JSON.stringify({ errMsg: 'Interal server error' }), {
      status: 500,
    });
    jest.spyOn(mRes, 'json');
    mockedFetch.mockResolvedValueOnce(mRes);
    try {
      await fetchFun('http://localhost/api', { method: 'get' });
    } catch (error) {
      const actual = await error;
      expect(actual).toEqual({ errMsg: 'Interal server error' });
    }

    expect(mockedFetch).toBeCalledWith('http://localhost/api', { method: 'get' });
    expect(mRes.json).toBeCalledTimes(1);
  });
});

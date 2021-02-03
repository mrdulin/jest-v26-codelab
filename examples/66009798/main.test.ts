import { refreshAccessToken } from './main';
import fetch from 'isomorphic-unfetch';
import { mocked } from 'ts-jest/utils';

jest.mock('isomorphic-unfetch');

const fetchMocked = mocked(fetch);

describe('66009798', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should get access token', async () => {
    process.env.NEXT_PUBLIC_AUTH_API_HTTPS_URL = 'http://new-api.com';
    const data = { accessToken: '123' };
    const mResponse = { json: jest.fn().mockResolvedValueOnce(data) };
    fetchMocked.mockResolvedValueOnce(mResponse as any);
    const actual = await refreshAccessToken();
    expect(actual).toBeTruthy();
    expect(fetch).toBeCalledWith('http://new-api.com/refreshToken', {
      method: 'POST',
      credentials: 'include',
    });
    expect(mResponse.json).toBeCalledTimes(1);
  });
});

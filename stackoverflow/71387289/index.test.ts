import { dateFilters } from './';
import axios from 'axios';

jest.mock('axios');
const mAxios = axios as jest.MockedFunction<typeof axios>;

describe('71387289', () => {
  test('should pass', async () => {
    const mockResponse = { data: 'fake data', status: 200, statusText: 'ok', headers: {}, config: {} };
    mAxios.mockResolvedValueOnce(mockResponse);
    const platform = 'awesome';
    const actual = await dateFilters(platform);
    expect(axios).toHaveBeenCalledTimes(1);
    expect(actual).toEqual(mockResponse);
  });
});

import axios, { AxiosResponse } from 'axios';
import { dateFilters } from '.';

jest.mock('axios');

const mAxios = axios as jest.MockedFunction<typeof axios>;

describe('71351319', () => {
  it('Mock Fetch API for Composite Score Response', async () => {
    const mockResponse = { data: {}, status: 200, statusText: 'ok' } as AxiosResponse;
    mAxios.mockResolvedValue(mockResponse);
    const response = await dateFilters('DateFilters');
    expect(mAxios).toHaveBeenCalledTimes(1);
    expect(response).toEqual({ data: {}, status: 200, statusText: 'ok' });
  });
});

import { main } from './main';
import axios from 'axios';

jest.mock('axios');

const axiosMock = axios as jest.MockedFunction<typeof axios>;
const axiosPostMock = axios.post as jest.MockedFunction<typeof axios.post>;

test('should pass', async () => {
    expect(jest.isMockFunction(axios)).toBe(true);
    expect(jest.isMockFunction(axios.post)).toBe(true);
    axiosPostMock.mockResolvedValueOnce('fake data 1');
    axiosMock.mockResolvedValueOnce('fake data 2' as any);
    await main();
});

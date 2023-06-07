import { main } from './main';
import axios from 'axios';

jest.mock('axios');

test('should pass', async () => {
    expect(jest.isMockFunction(axios)).toBe(true);
    expect(jest.isMockFunction(axios.post)).toBe(true);
    axios.post.mockResolvedValueOnce('fake data 1');
    axios.mockResolvedValueOnce('fake data 2');
    await main();
});

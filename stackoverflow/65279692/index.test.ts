jest.mock('node-fetch');
import fetch from 'node-fetch';
import { mocked } from 'ts-jest/utils';
const { Response } = jest.requireActual('node-fetch');

describe('65279692', () => {
  it('should pass', async () => {
    mocked(fetch).mockResolvedValueOnce(new Response('teresa teng'));
    const response = await fetch('http://localhost:3000');
    const acutal = await response.text();
    expect(acutal).toEqual('teresa teng');
  });
});

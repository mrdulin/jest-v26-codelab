import { MyClass } from './my-class';
import fetch from 'node-fetch';

jest.mock('node-fetch');
const { Response } = jest.requireActual('node-fetch');

describe('69579937', () => {
  it('Calls mockedFetch and gets the mocked values', async () => {
    expect(fetch).toHaveBeenCalledTimes(0);

    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
      new Response(JSON.stringify({ name: 'teresa teng' }), { url: 'url', status: 200, statusText: 'OK' })
    );
    const myclass = new MyClass();
    const response = await myclass.postEvent('testMsg');
    expect(response).toEqual({ name: 'teresa teng' });
    expect(fetch).toBeCalledWith('url', {
      method: 'POST',
      body: 'testMsg',
      headers: {
        'Content-type': 'application/json',
        'Api-Key': 'APIKEY',
      },
    });
  });
});

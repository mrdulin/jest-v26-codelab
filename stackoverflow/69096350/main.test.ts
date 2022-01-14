import { handler } from './main';
import axios from 'axios';

describe('69096350', () => {
  test('should pass', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get').mockImplementation(async (url) => {
      if (url === 'https://jsonplaceholder.typicode.com/todos?_limit=5') {
        return [1, 2, 3, 4, 5];
      } else if (url === 'https://jsonplaceholder.typicode.com/posts?_limit=5') {
        return ['a', 'b', 'c', 'd', 'e'];
      }
    });
    const actual = await handler({});
    expect(actual).toEqual({
      statusCode: 200,
      body: JSON.stringify({ todos: [1, 2, 3, 4, 5], posts: ['a', 'b', 'c', 'd', 'e'] }),
    });
    expect(axiosGetSpy).toBeCalledWith('https://jsonplaceholder.typicode.com/todos?_limit=5', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        authorization: 'Token',
      },
    });
    expect(axiosGetSpy).toBeCalledWith('https://jsonplaceholder.typicode.com/posts?_limit=5', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        authorization: 'Token',
      },
    });
    axiosGetSpy.mockRestore();
  });
});

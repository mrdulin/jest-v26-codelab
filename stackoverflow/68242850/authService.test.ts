import axios from 'axios';
import { authService } from './authService';

describe('68242850', () => {
  it('should return response', async () => {
    const postSpy = jest.spyOn(axios, 'post').mockResolvedValueOnce({
      success: true,
      message: 'logged in',
    });

    const actual = await authService({ email: 'blah@email.com', password: '123123' }, 'login');
    expect(actual).toEqual({ success: true, message: 'logged in' });
    expect(postSpy).toBeCalledWith(
      'http://localhost:3000/api/v1/login',
      { email: 'blah@email.com', password: '123123' },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    postSpy.mockRestore();
  });

  it('should handle error', () => {
    // you can figure it out based on above exmple
  });
});

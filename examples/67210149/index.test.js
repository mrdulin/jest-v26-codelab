import { functionToFetch } from '.';
import { post } from 'request';

jest.mock('request');

describe('67210149', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should do some specific handling on error', () => {
    const mError = new Error('network');
    post.mockImplementation((option, callback) => {
      callback(mError);
    });
    const logSpy = jest.spyOn(console, 'log');
    const fakeURI = 'http://example.com';
    functionToFetch(fakeURI);
    expect(logSpy).toBeCalledWith(mError);
    expect(post).toBeCalledWith({ url: 'http://example.com', headers: {}, json: {} }, expect.any(Function));
  });
});

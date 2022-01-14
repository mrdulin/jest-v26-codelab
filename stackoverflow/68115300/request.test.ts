import { mocked } from 'ts-jest/utils';
import client from './client';
import DefaultRequest from './request';

jest.mock('./client');

const mockedClient = mocked(client);

describe('68115300', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should pass', () => {
    mockedClient.post.mockImplementationOnce((req, callback) => {
      callback(null, 'mocked response');
    });
    const testRequest = new DefaultRequest();
    testRequest.make(('req' as unknown) as Request);
    expect(mockedClient.post).toBeCalledWith('req', expect.any(Function));
  });
});

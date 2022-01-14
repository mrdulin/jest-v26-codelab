import { dispatch } from './';
import jayson, { HttpsClient } from 'jayson/promise';
import { mocked } from 'ts-jest';

jest.mock('jayson/promise');

const httpsClientMock = mocked(jayson.Client.https);

describe('65924278', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should pass', async () => {
    const url = 'http://example.com:8000';
    const method = '';
    const payload = {};
    const serviceMock = ({
      request: jest.fn(),
    } as unknown) as HttpsClient;
    httpsClientMock.mockReturnValueOnce(serviceMock);
    await dispatch(url, method, payload);
    expect(jayson.Client.https).toBeCalledTimes(1);
    expect(serviceMock.request).toBeCalledWith('', {});
  });
});

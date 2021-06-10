import axios from 'axios';

describe('67916750', () => {
  it('should pass', () => {
    const mocks = {
      request: jest.fn(),
    };
    const cancelToken = axios.CancelToken.source();
    mocks.request({
      method: 'put',
      path: 'foo',
      cancelToken: cancelToken.token,
      headers: {
        'Content-Type': 'bar',
      },
    });

    expect(mocks.request).toHaveBeenCalledWith({
      method: 'put',
      path: 'foo',
      cancelToken: expect.any(Object),
      headers: { 'Content-Type': 'bar' },
    });
  });
});

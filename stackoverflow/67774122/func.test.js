const fun = require('./func');

describe('67774122', () => {
  it('should pass', async () => {
    const mConnection = {
      query: jest.fn().mockImplementation((input, callback) => {
        callback(null, 'mocked query result');
      }),
    };
    const mConn = {
      getConnection: jest.fn().mockReturnValueOnce(mConnection),
    };
    const actual = await fun(mConn, 'input');
    expect(actual).toEqual('mocked query result');
    expect(mConn.getConnection).toBeCalledTimes(1);
    expect(mConnection.query).toBeCalledWith('processed input', expect.any(Function));
  });
});

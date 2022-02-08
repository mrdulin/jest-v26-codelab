const prm = require('./a');

describe('71027434', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should get parameter value', async () => {
    const ssm = {
      getParameter: jest.fn().mockReturnThis(),
      promise: jest.fn().mockResolvedValueOnce({ Parameter: { Value: 'fake value' } }),
    };
    const SSMSpy = jest.spyOn(prm.AWS, 'SSM').mockReturnValue(ssm);
    const actual = await prm.getParameter('abc');
    expect(actual).toEqual('fake value');
    expect(SSMSpy).toBeCalledTimes(1);
    expect(ssm.getParameter).toBeCalledWith({ Name: 'abc', WithDecryption: true });
  });

  test('should handle error', async () => {
    const mError = new Error('network');
    const ssm = {
      getParameter: jest.fn().mockReturnThis(),
      promise: jest.fn().mockRejectedValueOnce(mError),
    };
    const SSMSpy = jest.spyOn(prm.AWS, 'SSM').mockReturnValue(ssm);
    await expect(prm.getParameter('abc')).rejects.toThrowError(
      'Error while retrieving parameter value from pstore.\n' + mError
    );
    expect(SSMSpy).toBeCalledTimes(1);
    expect(ssm.getParameter).toBeCalledWith({ Name: 'abc', WithDecryption: true });
  });
});

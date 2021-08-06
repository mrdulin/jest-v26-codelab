describe('68673646', () => {
  let mod;
  let axios;
  beforeEach(() => {
    jest.resetModules();
    mod = require('./service');
    axios = require('axios').default;
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should get name', async () => {
    const cancelTokenSource = { cancel: jest.fn(), token: { reason: { message: 'user canceled' } } };
    jest.spyOn(axios.CancelToken, 'source').mockReturnValueOnce(cancelTokenSource);
    jest.spyOn(axios, 'get').mockResolvedValueOnce('teresa teng');
    await mod.myTestFuncService('ABC');
    expect(axios.get).toBeCalledWith('mypath/ABC', { cancelToken: cancelTokenSource.token });
    expect(axios.CancelToken.source).toBeCalledTimes(1);
  });

  test('should cancel if cancel token exists', async () => {
    const cancelTokenSource = { cancel: jest.fn(), token: { reason: { message: 'user canceled' } } };
    jest.spyOn(axios.CancelToken, 'source').mockReturnValue(cancelTokenSource);
    jest.spyOn(axios, 'get').mockResolvedValue('teresa teng');
    await mod.myTestFuncService('ABC');
    expect(axios.get).toBeCalledWith('mypath/ABC', { cancelToken: cancelTokenSource.token });
    expect(axios.CancelToken.source).toBeCalledTimes(1);
    await mod.myTestFuncService('DEF');
    expect(cancelTokenSource.cancel).toBeCalledTimes(1);
    expect(axios.get).toBeCalledWith('mypath/DEF', { cancelToken: cancelTokenSource.token });
  });
});

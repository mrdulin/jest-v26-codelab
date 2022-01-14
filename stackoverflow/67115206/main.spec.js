import * as util from './util';

describe('Main', () => {
  it('should pass', () => {
    const utilSpy = jest.spyOn(util, 'stageHelper').mockReturnValueOnce('testValue');
    const { Main } = require('./main');
    expect(utilSpy).toBeCalledWith('abc');
    expect(Main.getValue()).toEqual('testValue');
  });
});

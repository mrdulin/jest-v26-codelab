const utils = require('./utils');

describe('67189137', () => {
  it('should pass', async () => {
    const params = {
      arg1: 'data1',
      arg2: 'data2',
    };
    const anotherFuncSpy = jest
      .spyOn(utils, 'anotherFunc')
      .mockImplementation(() => console.log('mock anotherFunc implementation'));
    await utils.originalFunc(params);
    expect(anotherFuncSpy).toBeCalledWith('data1', 'data2');
  });
});

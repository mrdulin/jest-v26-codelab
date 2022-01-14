const funcObject = require('./index');

describe('second func tests', () => {
  it('should call first func', () => {
    const funcObjectOutput = funcObject();
    const firstFuncSpy = jest.spyOn(funcObjectOutput, 'firstFunc');
    funcObjectOutput.secondFunc();

    expect(firstFuncSpy).toHaveBeenCalled();
  });
});

import MyClass from './MyClass';

describe('65376946', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should pass', () => {
    const fucntionASpy = jest.spyOn(MyClass as any, 'fucntionA').mockReturnValueOnce(false);
    const fucntionBSpy = jest.spyOn(MyClass as any, 'fucntionB').mockReturnValueOnce(true);
    const fucntionCSpy = jest.spyOn(MyClass as any, 'fucntionC').mockReturnValueOnce(false);
    const fucntionDSpy = jest.spyOn(MyClass as any, 'fucntionD').mockReturnValueOnce(true);

    const actual = MyClass.mainFunction('a', 1);
    expect(actual).toBeFalsy();
    expect(fucntionASpy).toBeCalledWith('a', 1);
    expect(fucntionBSpy).toBeCalledWith('a', 1);
    expect(fucntionCSpy).toBeCalledWith('a', 1);
    expect(fucntionDSpy).toBeCalledWith('a');
  });
});

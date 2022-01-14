const myModule = require('./handler.ts');

describe('Test Suite One', () => {
  it('should concat Strings', () => {
    const result = myModule.serviceFunction('Hello', 'World');
    expect(result).toEqual('HelloWorld');
  });

  it('should mock methodOne to reverse concat strings', () => {
    const methodOneSpy = jest
      .spyOn(myModule.Service.prototype, 'methodOne')
      .mockImplementationOnce((a: any, b: any) => {
        return b + a;
      });
    const result = myModule.serviceFunction('Hello', 'World');
    expect(result).toEqual('WorldHello');
    expect(methodOneSpy).toBeCalledWith('Hello', 'World');
    methodOneSpy.mockRestore();
  });
});

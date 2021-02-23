describe('functions', () => {
  it('do first test', () => {
    jest.mock('./someModule');
    const someModule = require('./someModule');
    expect(jest.isMockFunction(someModule.oneFunction)).toBeTruthy();
  });
});

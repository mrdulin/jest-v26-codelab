describe('65712158', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('should in list', () => {
    jest.doMock('./allowList', () => ({ ALLOW_LIST: { 5678: true } }));
    const { checkList } = require('./listUtil');
    expect(checkList('5678')).toBeTruthy();
  });

  it('should not in list', () => {
    jest.doMock('./allowList', () => ({ ALLOW_LIST: { 9123: true } }));
    const { checkList } = require('./listUtil');
    expect(checkList('1234')).toBeFalsy();
  });
});

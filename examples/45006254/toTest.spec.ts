describe('45006254', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('test1', () => {
    jest.doMock('./the-package-to-mock', () => ({
      methodToMock: jest.fn(() => 'type A'),
    }));
    const theThingToTest = require('./toTest');
    expect(theThingToTest.someAction().type).toBe('type A');
  });

  it('test2', () => {
    jest.doMock('./the-package-to-mock', () => ({
      methodToMock: jest.fn(() => 'type B'),
    }));
    const theThingToTest = require('./toTest');
    expect(theThingToTest.someAction().type).toBe('type B');
  });
});

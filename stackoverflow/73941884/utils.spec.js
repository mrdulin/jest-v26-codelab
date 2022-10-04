describe('73941884', () => {
  test('should pass', () => {
    const mServices = {
      someMethod: jest.fn().mockReturnValue(true),
    };
    jest.doMock('./services', () => mServices);
    const { doThing } = require('./utils');
    expect(doThing()).toEqual(true);
  });
});

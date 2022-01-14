const myService = require('./myService.js');

describe('testing myService', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should return 2 by mocked', () => {
    const service = myService();
    jest.spyOn(service, 'foo').mockReturnValueOnce(2);
    expect(service.foo()).toBe(2);
    expect(service.foo).toBeCalledTimes(1);
  });
  it('should return 1', () => {
    const service = myService();
    expect(jest.isMockFunction(service.foo)).toBeFalsy();
    expect(service.foo()).toBe(1);
  });
});

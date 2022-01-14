import { makeClass } from './make-class';
describe('68235299', () => {
  it('should pass', () => {
    const mockedClassInstance = {
      method: jest.fn(),
    };
    const mockedClass = jest.fn(() => mockedClassInstance);
    makeClass(mockedClass);

    expect(mockedClass).toHaveBeenCalledTimes(1);
    expect(mockedClass.mock.instances).toHaveLength(1);
    expect(mockedClassInstance.method).toBeCalledWith(expect.any(Function));
  });
});

import { MyClass } from './';

describe('spy getter call times issue', () => {
  let nameGetterSpy: jest.SpyInstance;
  beforeEach(() => {
    nameGetterSpy = jest.spyOn(MyClass.prototype, 'name', 'get');
  });
  it('should be called one time', () => {
    const instance = new MyClass();
    expect(instance.name).toEqual('teresa teng');
    expect(nameGetterSpy).toBeCalledTimes(1);
  });
});

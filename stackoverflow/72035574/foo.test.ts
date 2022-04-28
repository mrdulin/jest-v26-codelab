class Foo {
  constructor() {}
  public bar() {
    return console.log('bar');
  }
}

describe('tests on class Foo', () => {
  let spyOnBar: jest.SpyInstance;
  let foo: InstanceType<typeof Foo>;
  beforeEach(() => {
    foo = new Foo();
    spyOnBar = jest.spyOn(foo, 'bar');
  });

  test('should call bar', () => {
    foo.bar();
    expect(spyOnBar).toBeCalledTimes(1);
  });

  test('should call bar - 2', () => {
    foo.bar();
    expect(spyOnBar).toBeCalledTimes(1);
  });
});

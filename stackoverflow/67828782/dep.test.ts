import dep from './dep';

jest.mock('./dep', () => ({
  __esModule: true,
  default: {
    now: 'mocked',
  },
}));
console.log(dep);

describe('Test Dependency', () => {
  it('should work', () => {
    expect((dep as any).now).toEqual('mocked');
  });
});

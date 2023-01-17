import { describeServerTest } from './test-utils';

describeServerTest('test a service', () => {
  it('should pass', () => {
    console.log('a service test case run');
    expect(1 + 1).toEqual(2);
  });
});

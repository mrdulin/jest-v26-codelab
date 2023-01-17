import { describeServerTest } from './test-utils';

describeServerTest('test b service', () => {
  it('should pass', () => {
    console.log('b service test case run');
    expect(1 + 1).toEqual(2);
  });
});

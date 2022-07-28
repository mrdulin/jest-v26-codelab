import { someMethod } from './something';

jest.unmock('./something');

describe('73129547 - something', () => {
  test('should pass', () => {
    expect(someMethod()).toBe(1);
  });
});

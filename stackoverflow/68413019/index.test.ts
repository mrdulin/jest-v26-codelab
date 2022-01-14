import { inputValidation } from './';

describe('68413019', () => {
  test('should throw error if the length of phnum lt 10 digit', () => {
    expect(() => inputValidation('1', 123, true)).toThrowError('phnum must be 10 digit');
  });
  test('should throw error if the length of pincode lt 7 digit', () => {
    expect(() => inputValidation('1234567890', '123', true)).toThrowError('zipcode must be 7 digit');
  });
  test('should return true if input is valid', () => {
    expect(inputValidation('1234567890', '12345678', true)).toBeTruthy();
  });
});

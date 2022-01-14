import axios from 'axios';

describe('66341555 - a', () => {
  it('should pass', () => {
    expect(jest.isMockFunction(axios)).toBeTruthy();
  });
});

import axios from 'axios';

describe('66341555 - b', () => {
  it('should pass', () => {
    expect(jest.isMockFunction(axios)).toBeTruthy();
  });
});

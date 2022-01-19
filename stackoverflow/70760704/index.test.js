const fs = require('fs');

jest.mock('fs');

describe('70760704', () => {
  test('should pass', () => {
    expect(jest.isMockFunction(fs.readFileSync)).toBeTruthy();
    fs.readFileSync.mockReturnValue('test string');
    require('./');
  });
});

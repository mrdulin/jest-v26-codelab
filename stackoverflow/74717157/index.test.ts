const winPath = require("path").win32;

jest.mock('path', () => {
  return {
    ...(jest.requireActual('path') as typeof import('path')),
    win32: {
      normalize: jest.fn(),
    }
  }
})

describe('74717157', () => {
  test('should pass', () => {
    winPath.normalize.mockImplementation(() => 'override the original implementation')
    expect(jest.isMockFunction(winPath.normalize)).toBeTruthy();
    expect(winPath.normalize()).toBe('override the original implementation')
  })
})
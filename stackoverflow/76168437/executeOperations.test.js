import { executeOperation } from './executeOperations';

describe('76168437', () => {
  test('should pass', () => {
    const operation = (a, b) => a + b;
    const promptSpy = jest.spyOn(window, 'prompt').mockReturnValueOnce(1).mockReturnValueOnce(2);
    const actual = executeOperation(operation);
    expect(actual).toBe(3);
    promptSpy.mockRestore();
  })
})
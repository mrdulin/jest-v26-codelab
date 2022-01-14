import { getUserTest } from './api';

describe('68771600', () => {
  test('should pass', () => {
    const testData = { current_user: 'Rahul Raj', name: 'Lafarge' };

    const response = { json: jest.fn().mockResolvedValueOnce(testData) };
    global.fetch = jest.fn().mockResolvedValueOnce(response);

    return getUserTest().then((data) => {
      expect(data).toEqual(testData);
    });
  });
});

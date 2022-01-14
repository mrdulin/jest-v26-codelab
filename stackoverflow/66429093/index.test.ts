import { MainFunction } from './';

jest.mock('fs', () => ({
  promises: {
    copyFile: jest.fn().mockImplementation((src = 'source', dest = 'destination') => {
      console.log('Inside the mock function in copyFile, please get executed, got frustrated', src, dest);
      return Promise.resolve(false);
    }),
    stat: jest.fn().mockReturnThis(),
    isFile: jest.fn().mockImplementation(() => {
      console.log('Inside the mock function in stat method, please get executed, got frustrated');
      return Promise.resolve(false);
    }),
  },
}));

describe('Testing implementation', () => {
  const sample = new MainFunction();
  test('Testing', async () => {
    const actual = await sample.demo();
    expect(actual).toBeTruthy();
  });
});

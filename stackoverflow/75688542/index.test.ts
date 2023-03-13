import { timeout } from '.';

describe('75688542', () => {
  test('should resolve', async () => {
    const mPromise = Promise.resolve('test');
    const res = await timeout(mPromise, 10);
    expect(res).toEqual('test');
  });
  test('should reject', async () => {
    const mPromise = Promise.reject(new Error('test'));
    await expect(() => timeout(mPromise, 10)).rejects.toThrow('test');
  });
  test('should timeout', async () => {
    const mPromise = new Promise((resolve) => setTimeout(resolve, 100));
    await expect(() => timeout(mPromise, 10)).rejects.toThrow('Request timed out.');
  });
});

import {polling} from './polling';



describe('polling', () => {
  test('should pass', async () => {
    jest.useFakeTimers();
    let count = 0;
    const fn = async () => {
      count += 1;
      return count;
    };
    const cb = (res) => res === 5;

    const res = await polling(fn, cb, 1);
    for (let i = 0; i < 6; i++) {
      jest.runAllTimers();
      await Promise.resolve();
    }
    expect(res).toBe(6);
  })
})
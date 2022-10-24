export const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));


/**
 *
 * @param {*} fn async function which will return result
 * @param {*} cb callback to verify result for expected result. Return boolean value true to stop polling.
 * @param {*} ms polling time
 * @returns
 */
export async function polling<T>(
  fn: () => Promise<T>,
  cb: (res: T) => boolean,
  ms: number
): Promise<T> {
  try {
    const res = await fn();
    if (cb(res)) {
      return res;
    }
    await wait(ms);
    return polling(fn, cb, ms);
  } catch (error) {
    throw error;
  }
}
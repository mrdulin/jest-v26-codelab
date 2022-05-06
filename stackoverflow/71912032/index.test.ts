import { main } from './';

function flushMessageQueue(ms = 10) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('71912032', () => {
  test('should pass', async () => {
    const logSpy = jest.spyOn(console, 'log');
    main();
    const data = { type: 'abc', payload: 'xyz' };

    window.postMessage(data, '*');

    await flushMessageQueue();
    expect(logSpy).toBeCalledWith('xyz');
  });
});

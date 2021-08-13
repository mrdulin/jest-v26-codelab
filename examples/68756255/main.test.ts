function flushMessageQueue(ms = 10) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
describe('68756255', () => {
  test('Recieves message', async () => {
    require('./main');
    window.postMessage('Hello', '*');
    await flushMessageQueue();
  });
});

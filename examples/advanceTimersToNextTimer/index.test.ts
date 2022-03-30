describe('71667406', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  describe('advanceTimersToNextTimer', () => {
    test('should pass', () => {
      const runOrder: Array<string> = [];
      const mock1 = jest.fn(() => runOrder.push('mock1'));
      const mock2 = jest.fn(() => runOrder.push('mock2'));
      const mock3 = jest.fn(() => runOrder.push('mock3'));
      const mock4 = jest.fn(() => runOrder.push('mock4'));

      setTimeout(mock1, 100);
      setTimeout(mock2, 0);
      setTimeout(mock3, 0);
      setInterval(() => {
        mock4();
      }, 200);

      jest.advanceTimersToNextTimer();
      // Move forward to t=0
      expect(runOrder).toEqual(['mock2', 'mock3']);

      jest.advanceTimersToNextTimer();
      // Move forward to t=100
      expect(runOrder).toEqual(['mock2', 'mock3', 'mock1']);

      jest.advanceTimersToNextTimer();
      // Move forward to t=200
      expect(runOrder).toEqual(['mock2', 'mock3', 'mock1', 'mock4']);

      jest.advanceTimersToNextTimer();
      // Move forward to t=400
      expect(runOrder).toEqual(['mock2', 'mock3', 'mock1', 'mock4', 'mock4']);
    });

    test('should pass with steps', () => {
      const runOrder: Array<string> = [];
      const mock1 = jest.fn(() => runOrder.push('mock1'));
      const mock2 = jest.fn(() => runOrder.push('mock2'));
      const mock3 = jest.fn(() => runOrder.push('mock3'));
      const mock4 = jest.fn(() => runOrder.push('mock4'));

      setTimeout(mock1, 100);
      setTimeout(mock2, 0);
      setTimeout(mock3, 0);
      setInterval(() => {
        mock4();
      }, 200);

      jest.advanceTimersToNextTimer(4);
      expect(runOrder).toEqual(['mock2', 'mock3', 'mock1', 'mock4', 'mock4']);
    });
  });

  describe('advanceTimersByTime', () => {
    test('should pass', () => {
      const runOrder: Array<string> = [];
      const mock1 = jest.fn(() => runOrder.push('mock1'));
      const mock2 = jest.fn(() => runOrder.push('mock2'));
      const mock3 = jest.fn(() => runOrder.push('mock3'));
      const mock4 = jest.fn(() => runOrder.push('mock4'));

      setTimeout(mock1, 100);
      setTimeout(mock2, 0);
      setTimeout(mock3, 0);
      setInterval(() => {
        mock4();
      }, 200);

      jest.advanceTimersByTime(0);
      // Move forward to t=0
      expect(runOrder).toEqual(['mock2', 'mock3']);

      jest.advanceTimersByTime(100);
      // Move forward to t=100
      expect(runOrder).toEqual(['mock2', 'mock3', 'mock1']);

      jest.advanceTimersByTime(200);
      // Move forward to t=200
      expect(runOrder).toEqual(['mock2', 'mock3', 'mock1', 'mock4']);

      jest.advanceTimersByTime(200);
      // Move forward to t=400
      expect(runOrder).toEqual(['mock2', 'mock3', 'mock1', 'mock4', 'mock4']);
    });

    test('should pass advance all timers', () => {
      const runOrder: Array<string> = [];
      const mock1 = jest.fn(() => runOrder.push('mock1'));
      const mock2 = jest.fn(() => runOrder.push('mock2'));
      const mock3 = jest.fn(() => runOrder.push('mock3'));
      const mock4 = jest.fn(() => runOrder.push('mock4'));

      setTimeout(mock1, 100);
      setTimeout(mock2, 0);
      setTimeout(mock3, 0);
      setInterval(() => {
        mock4();
      }, 200);

      // We need to calculate it, this is very cumbersome
      jest.advanceTimersByTime(0 + 100 + 200 + 200);
      expect(runOrder).toEqual(['mock2', 'mock3', 'mock1', 'mock4', 'mock4']);
    });
  });
});

// import { formatCurrency } from './formatCurrency';

describe('given formatCurrency fucntion', () => {
  let windowSpy;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
    jest.resetModuleRegistry();
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('should set the user language to `en-GB`', async () => {
    windowSpy.mockImplementation(() => ({
      navigator: {
        language: 'en-GB',
      },
    }));

    const { formatCurrency } = await import('./formatCurrency');

    expect(window.navigator.language).toBe('en-GB');
    expect(formatCurrency(1000)).toBe('£1,000.00');
  });

  it('should set the user language to `en-US`', async () => {
    windowSpy.mockImplementation(() => ({
      navigator: {
        language: 'en-US',
      },
    }));

    const { formatCurrency } = await import('./formatCurrency');

    expect(window.navigator.language).toBe('en-US');
    expect(formatCurrency(1000)).toBe('$1,000.00');
  });
});

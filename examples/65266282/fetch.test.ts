import { fetch } from './fetch';

const fetchSpy = jest.fn();

jest.mock('./fetch', () => {
  const { fetch } = jest.requireActual('./fetch');
  const fetchWithSpy = jest.fn().mockImplementation((...args) => {
    fetchSpy(...args);
    return fetch(...args);
  });
  return {
    fetch: fetchWithSpy,
  };
});

describe('65266282', () => {
  it('should set createScrollContextImmediately when result is above the maximum return limit', async () => {
    const actual = await fetch('teresa teng');
    expect(actual).toBe('real implementation');
    expect(fetchSpy).toBeCalledWith('teresa teng');
    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });
});

import { fetch } from './fetch';

const fetchSpy = jest.fn();
const fetchProxy = new Proxy(fetch, {
  apply: (target, thisArg, argumentsList) => {
    fetchSpy.apply(thisArg, argumentsList);
    return target.apply(thisArg, argumentsList);
  },
});

describe('65266282', () => {
  it('should set createScrollContextImmediately when result is above the maximum return limit', async () => {
    const actual1 = await fetchProxy('teresa teng');
    expect(actual1).toBe('real implementation');
    const actual2 = await fetchProxy('best singer');
    expect(actual2).toBe('real implementation');
    expect(fetchSpy).toBeCalledWith('teresa teng');
    expect(fetchSpy).toBeCalledWith('best singer');
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });
});

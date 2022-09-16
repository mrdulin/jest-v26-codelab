import { renderHook } from '@testing-library/react-hooks/dom';
import { useTheFetch } from './use-the-fetch';
import { getStarWars } from './base-fetch';

jest.mock('./base-fetch');

const mGetStarWars = getStarWars as jest.MockedFunction<typeof getStarWars>;

describe('use the fetch', () => {
  it('initial data state is loading and data empty', () => {
    const { result } = renderHook(() => useTheFetch('people'));
    expect(result.current).toStrictEqual({ loading: true, data: null });
  });

  it('data is fetched and loading is complete', async () => {
    const fakeSWData = { result: [{ name: 'Luke Skywalker' }] };
    mGetStarWars.mockResolvedValue(fakeSWData);

    const { result, waitForNextUpdate } = renderHook(() => useTheFetch('people'));

    await waitForNextUpdate();

    expect(getStarWars).toBeCalledWith('people');
    expect(result.current).toStrictEqual({
      loading: false,
      data: fakeSWData,
    });
  });
});

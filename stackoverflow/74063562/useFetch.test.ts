import { useFetch } from './useFetch';
import axios from 'axios';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useFetch', () => {
  it('fetches successfully data from an API', async () => {
    const mockData = { data: 'test response' };
    const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockData })
    const { result } = renderHook(() => useFetch());

    expect(result.current.error).toBe(null);

    await act(async () => {
      await expect(result.current.fetchData('react')).resolves.toEqual(mockData);
    })

    axiosGetSpy.mockRestore();
  });
});

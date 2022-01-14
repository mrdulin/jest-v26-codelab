import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useTimer } from './useTimer';

describe('useTimer', () => {
  it('should pass', async () => {
    const cb = (t: number) => `message-${t}`;
    const spy = jest.fn(cb);
    const { result } = renderHook(() => useTimer(3, spy));

    await waitFor(() => expect(result.current[0]).toBe(3));
    await waitFor(() => expect(result.current[1]).toBe('message-3'));
    await waitFor(() => expect(spy).toBeCalledTimes(1));
  });
});

import { act, renderHook } from '@testing-library/react-hooks';
import useOpenClose from './useOpenClose';

describe('useOpenClose', () => {
  test('should pass', () => {
    const { result } = renderHook(() => useOpenClose());

    expect(result.current[1].open).toBeInstanceOf(Function);
    expect(result.current[1].close).toBeInstanceOf(Function);
    expect(result.current[0]).toBe(false);
    act(() => result.current[1].open());
    console.log(result.current[0]);
  });
});

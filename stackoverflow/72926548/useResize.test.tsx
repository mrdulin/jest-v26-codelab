import { renderHook, act } from '@testing-library/react-hooks';
import useResize from './useResize';

describe('72926548', () => {
  test('should set new width', async () => {
    const { result } = renderHook(() => useResize({ minWidth: 100, maxWidth: 200 }));
    act(() => {
      result.current.enableResize();
    })
    expect(result.current.isResizing).toBeTrue();
    Object.defineProperty(document.body, 'offsetWidth', {
      value: 1150,
    });
    Object.defineProperty(document.body, 'offsetLeft', {
      value: 0,
    });
    act(() => {
      document.dispatchEvent(new MouseEvent('mousemove', { clientX: 1000 }));
    })
    expect(result.current.width).toBe(150);
  });
});

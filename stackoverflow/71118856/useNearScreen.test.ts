import { renderHook } from '@testing-library/react-hooks';
import { MutableRefObject } from 'react';
import { useRef } from 'react';
import useNearScreen from './useNearScreen';

describe('useNearScreen', () => {
  test('should pass', () => {
    const mObserver = {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    };
    const mIntersectionObserver = jest.fn();
    mIntersectionObserver.mockImplementation((callback, options) => {
      callback([{ isIntersecting: true }], mObserver);
      return mObserver;
    });
    window.IntersectionObserver = mIntersectionObserver;

    const mHTMLDivElement = document.createElement('div');
    const { result } = renderHook(() => {
      const elementRef = useRef<HTMLDivElement>(mHTMLDivElement);
      return useNearScreen(elementRef as MutableRefObject<HTMLDivElement>);
    });
    expect(result.current).toBe(true);
    expect(mIntersectionObserver).toBeCalledWith(expect.any(Function), { rootMargin: '80px' });
    expect(mObserver.observe).toBeCalledWith(mHTMLDivElement);
    expect(mObserver.disconnect).toBeCalled();
  });
});

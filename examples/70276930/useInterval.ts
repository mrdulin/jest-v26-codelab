import { MutableRefObject, useRef } from 'react';

export function useInterval() {
  const ref: MutableRefObject<ReturnType<typeof setInterval> | null> = useRef(null);
  function set(callback: () => void, delay: number) {
    ref.current = setInterval(callback, delay);
  }
  function clear() {
    if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
    }
  }
  return { set, clear };
}

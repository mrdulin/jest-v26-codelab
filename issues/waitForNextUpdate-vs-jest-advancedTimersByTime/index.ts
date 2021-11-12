import { useState, useCallback } from 'react';

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((x) => x + 1);
  const incrementAsync = useCallback(() => setTimeout(increment, 1000 * 10), [increment]);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);
  return { count, increment, incrementAsync, reset };
}

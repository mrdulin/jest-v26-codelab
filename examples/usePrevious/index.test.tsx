import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { useEffect, useRef, useState } from 'react';

function usePrevious(value?: any) {
  const nRef = useRef<any>(value ?? 0);

  useEffect(() => {
    console.log('value: ', value);
    nRef.current = value ?? 0;
  }, [value]);

  console.log('nRef: ', nRef);
  return nRef.current;
}

function TestComp() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);
  return (
    <div>
      <p>previous: {previousCount}</p>
      <p>current: {count}</p>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
}

describe('usePrevious', () => {
  test.only('should pass', async () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 32 },
    });
    expect(result.current).toBe(32);
    rerender({ value: 64 });
    expect(result.current).toBe(32);
    rerender({ value: 128 });
    expect(result.current).toBe(64);
  });

  test('should pass', async () => {
    render(<TestComp />);
    const button = screen.getByText(/increase/);
    screen.debug();
    fireEvent.click(button);
    await waitFor(() => {
      screen.debug();
    });
  });
});

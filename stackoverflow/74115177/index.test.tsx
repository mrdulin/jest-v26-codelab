import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React, { useState } from 'react';
import { ErrorBoundary } from '.';

describe('74115177', () => {
  test('should pass', () => {
    const ThrowError = () => {
      const [count, setCount] = useState(0);
      if (count > 1) {
        throw new Error("Test");
      }
      return <div>
        <p>count: {count}</p>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    fireEvent.click(screen.getByRole('button', { name: 'increment' }))
    fireEvent.click(screen.getByRole('button', { name: 'increment' }))

    expect(screen.queryByRole("alert")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Try again?" }));
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  })
})
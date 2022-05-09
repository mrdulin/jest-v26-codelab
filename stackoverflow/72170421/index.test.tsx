import { render, screen } from '@testing-library/react';
import React, { useEffect, useRef } from 'react';
import { MutableRefObject } from 'react';
import '@testing-library/jest-dom/extend-expect';

export const test = (ref: MutableRefObject<HTMLElement | null>): void => {
  if (ref.current) ref.current.focus();
};

describe('test', () => {
  it('testing', () => {
    function TestComp() {
      const ref = useRef<HTMLInputElement>(null);
      useEffect(() => {
        test(ref);
      }, []);
      return <input ref={ref} data-testid="input" />;
    }
    render(<TestComp />);
    const input = screen.getByTestId('input');
    expect(input).toHaveFocus();
  });
});

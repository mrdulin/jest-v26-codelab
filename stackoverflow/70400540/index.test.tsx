import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Example } from './';

describe('70400540', () => {
  test('should pass', () => {
    const specialEvent = new CustomEvent('specialEvent');
    render(<Example />);
    expect(screen.getByText('b')).toBeInTheDocument();
    act(() => {
      window.document.dispatchEvent(specialEvent);
    });
    expect(screen.getByText('a')).toBeInTheDocument();
  });
});

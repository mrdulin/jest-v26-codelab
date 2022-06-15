import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', () => {
  it('render App', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it('render App with numbers', () => {
    const { getByText } = render(<App />);
    const numbers = [1, 2, 3, 4, 5, 6];
    numbers.forEach((n, i) => {
      expect(getByText(`${n}`)).toBeInTheDocument();
      expect(getByText(`${n}`).id).toEqual(`header-toggle-${i}`);
    });
  });
});

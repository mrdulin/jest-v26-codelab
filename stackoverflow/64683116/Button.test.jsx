import React from 'react';
import Button from './Button';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('64683116', () => {
  it('should pass', () => {
    const { container } = render(<Button></Button>);
    expect(container.querySelector('p')).toHaveTextContent('You clicked 0 times');
    expect(container.querySelector('button')).toHaveTextContent('Increment');
    fireEvent.click(container.querySelector('button'));
    expect(container.querySelector('p')).toHaveTextContent('You clicked 1 times');
    fireEvent.click(container.querySelector('button'));
    expect(container.querySelector('p')).toHaveTextContent('You clicked 2 times');
  });
});

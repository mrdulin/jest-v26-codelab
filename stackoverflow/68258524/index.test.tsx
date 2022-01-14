import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { MyComponent } from './';

describe('68258524', () => {
  it('should pass', () => {
    render(<MyComponent renderNothing={true} />);
    const myComponent = screen.queryByTestId('my-component');
    expect(myComponent).not.toBeInTheDocument();
  });
});

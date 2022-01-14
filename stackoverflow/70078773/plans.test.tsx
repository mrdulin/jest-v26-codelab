import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Plans from './plans';

describe('plans', () => {
  it('renders the plans component', async () => {
    render(<Plans />);
    expect(screen.getByText(/hello/)).toBeInTheDocument();
  });
});

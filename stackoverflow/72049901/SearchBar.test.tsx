import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { SearchBar } from './SearchBar';

describe('72049901', () => {
  test('should pass', () => {
    render(<SearchBar />);
    expect(screen.queryByText('...')).not.toBeInTheDocument();
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'a' } });
    expect(screen.queryByText('...')).toBeInTheDocument();
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '' } });
    expect(screen.queryByText('...')).not.toBeInTheDocument();
  });
});

import { render, screen, act, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('should render select', async () => {
    render(<MyComponent />);

    const combobox = screen.getByRole('combobox');
    fireEvent.mouseDown(combobox);

    act(() => {
      const option = screen.getByRole('option', { name: 'my option 2' });
      fireEvent.click(option);
    });

    // fireEvent.change(combobox, { target: { value: 'my option 2' } });

    await waitFor(() => {
      expect(screen.getByRole('option', { name: 'my option 2' })).toBeInTheDocument();
    });
  });
});

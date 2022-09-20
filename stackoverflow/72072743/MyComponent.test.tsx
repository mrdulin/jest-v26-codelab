import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MyComponent } from './MyComponent';

describe('72072743', () => {
  test('should pass', async () => {
    const user = userEvent.setup();
    render(<MyComponent />);
    await user.type(screen.getByTestId(/my-input/i), 'chocolatemoose');
    expect(screen.getByTestId(/my-input/i)).toHaveValue('choco');
  });
});

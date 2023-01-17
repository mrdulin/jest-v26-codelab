import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { A } from '.';

test('show render edit ui when click button', () => {
  render(<A />);
  const icon = screen.getByTestId('editIcon');
  expect(icon).toBeInTheDocument();
  fireEvent.click(icon);
  expect(screen.getByTestId('form')).toBeInTheDocument();
});

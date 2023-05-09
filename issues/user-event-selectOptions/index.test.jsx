import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('selectOptions', () => {
  render(
    <select multiple>
      <option value="1">A</option>
      <option value="2">B</option>
      <option value="3">C</option>
    </select>
  );

  userEvent.selectOptions(screen.getByRole('listbox'), ['1', '3']);

  expect(screen.getByRole('option', { name: 'A' }).selected).toBe(true);
  expect(screen.getByRole('option', { name: 'B' }).selected).toBe(false);
  expect(screen.getByRole('option', { name: 'C' }).selected).toBe(true);
});

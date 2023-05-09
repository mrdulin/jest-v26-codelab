import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import React from "react"
import { MyComponent } from './'

describe('74627696', () => {
  test('should pass', async () => {
    const user = userEvent.setup();
    render(<MyComponent />);
    const listbox = screen.getByRole('combobox', { name: 'Nationaliteit' });
    const selectOption = screen.getAllByRole('option', { name: 'French' })[0]
    await user.selectOptions(listbox, selectOption)
    expect((screen.getAllByRole('option', { name: 'French' })[0] as HTMLOptionElement).selected).toBe(true)
  })
})
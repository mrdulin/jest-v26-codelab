import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';

test('All input fields are displayed', allFieldsAreDisplayed);
test('Greeting displayed', greetingDisplayed);

function allFieldsAreDisplayed() {
  render(<Form />);
  const firstNameInput = screen.getByText('first name');
  expect(firstNameInput).toBeInTheDocument();
}

function greetingDisplayed() {
  render(<Form />);
  const greeting = screen.getByText('Hello');
  expect(greeting).toBeInTheDocument();
}

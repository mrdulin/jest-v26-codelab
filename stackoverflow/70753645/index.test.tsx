import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Example } from './';

describe('70753645', () => {
  let email, password1, allInputs;
  beforeEach(() => {
    const { container } = render(<Example />);
    email = container.querySelector('input[name="email"]');
    password1 = container.querySelector('input[name="password1"]');
    allInputs = container.querySelectorAll('input');
  });

  it('Should render all fields', () => {
    allInputs.forEach((input) => {
      expect(input).toBeInTheDocument();
    });
  });

  it('Another test', () => {
    expect(email).toBeInTheDocument(); // fails
  });
});

import { render, screen } from '@testing-library/react';
import React from 'react';
import Login from './Login';

describe('Login', () => {
  it('should have providers', () => {
    const { getAllByRole } = render(<Login />);
    const providers: Array<string | null> = getAllByRole('listitem').map((element) => {
      return element.textContent;
    });
    console.log(providers);
    expect(providers).toContain('GitHub');
  });
});

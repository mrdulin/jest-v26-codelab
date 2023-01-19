import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';
import { Login } from './Login';

const user = userEvent.setup();

describe('75169372', () => {
  test('should pass', async () => {
    render(<Login />);
    const emailTextField = screen.getByLabelText(/email address/i);
    const passwordTextField = screen.getByLabelText(/password/i);
    const LoginBtn = screen.getByRole('button', { name: 'Login' });
    await user.type(emailTextField, 'hello');
    await user.type(passwordTextField, '12345');
    expect(LoginBtn).toBeEnabled();
  });
});

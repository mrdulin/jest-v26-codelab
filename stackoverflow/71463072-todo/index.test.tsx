import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Login } from '.';

console.log('RTL_SKIP_AUTO_CLEANUP: ', process.env.RTL_SKIP_AUTO_CLEANUP);

describe('Login Component Testing without history', () => {
  let renderedScreen;
  // beforeEach(() => {
  renderedScreen = render(<Login />);
  // });

  test('should render login form input', () => {
    // check if username and password input is rendered
    expect(renderedScreen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(renderedScreen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('should render login button disabled initially', () => {
    // check if login button is rendered and disabled initially
    console.log('2:', renderedScreen.container.innerHTML);
    expect(renderedScreen.getByRole('button')).toBeDisabled();
  });

  test('should render login button enabled when username and password have value', () => {
    const $username = renderedScreen.getByPlaceholderText('Username');
    const $password = renderedScreen.getByPlaceholderText('Password');
    fireEvent.change($username, { target: { value: 'teresa teng' } });
    fireEvent.change($password, { target: { value: '123456' } });
    console.log('3:', renderedScreen.container.innerHTML);
    expect(renderedScreen.getByRole('button')).toBeEnabled();
  });
});

// @ts-ignore
import { Auth0Provider } from '@auth0/auth0-react';

jest.mock('@auth0/auth0-react');
console.log(Auth0Provider);

describe('68945478', () => {
  test('should pass', () => {
    Auth0Provider();
  });
});

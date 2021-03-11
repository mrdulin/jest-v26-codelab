import React from 'react';
import { useHistory } from 'react-router-dom';

async function authLogout() {}

export function UserMenuComponent() {
  const history = useHistory();
  const logout = async () => {
    try {
      await authLogout();
    } catch (error) {
      console.error(error);
    } finally {
      history.push('/login');
    }
  };

  return <button type="button" title="Logout" data-testid="logout" onClick={logout}></button>;
}

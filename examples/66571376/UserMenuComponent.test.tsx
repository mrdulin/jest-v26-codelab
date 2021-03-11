import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { UserMenuComponent } from './UserMenuComponent';

describe('UserMenuComponent', () => {
  it('go to login page after click on logout', async () => {
    const history = createMemoryHistory();
    const pushSpy = jest.spyOn(history, 'push');

    const { getByTestId } = render(
      <Router history={history}>
        <UserMenuComponent />,
      </Router>
    );

    fireEvent.click(getByTestId('logout'));
    await waitFor(() => {
      expect(pushSpy).toBeCalledWith('/login');
      expect(history.location.pathname).toBe('/login');
    });
  });
});

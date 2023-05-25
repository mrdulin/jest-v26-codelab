import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { createMemoryHistory } from 'history';
import { SideBar } from './';
import { Router } from 'react-router-dom';

const createRouterWrapper = (history): React.ComponentType => ({ children }) => (
  <Router history={history}>{children}</Router>
);

describe('SideBar', () => {
  it('navigation to location 1', () => {
    const history = createMemoryHistory();
    render(<SideBar />, { wrapper: createRouterWrapper(history) });
    fireEvent.click(screen.getByText('location 1'));
    expect(history.location.pathname).toBe('/location1');
  });

  it('navigation to location 2', () => {
    const history = createMemoryHistory();
    render(<SideBar />, { wrapper: createRouterWrapper(history) });
    fireEvent.click(screen.getByText('location 2'));
    expect(history.location.pathname).toBe('/location2');
  });
});

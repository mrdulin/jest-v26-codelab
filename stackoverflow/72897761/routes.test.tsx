import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import Routing from './routes';

describe('first', () => {
  it('Should test 404 route', async () => {
    const history = createMemoryHistory();
    history.push('/bad/route');
    render(
      <Router history={history}>
        <Routing />
      </Router>
    );
    expect(await screen.findByText(/404 error/i)).toBeInTheDocument();
  });

  it('should render home page', async () => {
    const history = createMemoryHistory();
    history.push('/home');
    render(
      <Router history={history}>
        <Routing />
      </Router>
    );
    expect(await screen.findByText(/home/i)).toBeInTheDocument();
  });
  it('should render account detail page', async () => {
    const history = createMemoryHistory();
    history.push('/account-details/admin/1');
    render(
      <Router history={history}>
        <Routing />
      </Router>
    );
    expect(await screen.findByText(/account detail/i)).toBeInTheDocument();
  });
});

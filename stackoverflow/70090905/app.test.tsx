import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App, { Routes } from './app';

describe('App component', () => {
  it('renders page header and login component on default route', () => {
    render(
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
    );
    expect(screen.getByText('login')).toBeInTheDocument();
  });

  it('Renders page header and Register component on Register route', () => {
    render(
      <MemoryRouter initialEntries={['/register']}>
        <Routes />
      </MemoryRouter>
    );
    expect(screen.getByText('Register')).toBeInTheDocument();
  });
});

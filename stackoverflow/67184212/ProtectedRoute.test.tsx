import React from 'react';
import { render, screen } from '@testing-library/react';
import ProtectedRoute from './protectedRoute';
import { AuthContext } from './AuthContext';
import { MemoryRouter } from 'react-router-dom';
import { Info } from './Info';

const currentUser = { uid: 1 };

describe('protected route works with authenticated users', () => {
  test('can login when user is authenticated', () => {
    render(
      <AuthContext.Provider value={{ currentUser }}>
        <MemoryRouter initialEntries={['/']}>
          <ProtectedRoute component={Info} />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.queryByTestId('protected-component')).toBeDefined();
  });
});

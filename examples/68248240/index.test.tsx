import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Test } from './';

describe('68248240', () => {
  it('should pass', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/', search: '?value=teresa_teng' }]}>
        <Test />
      </MemoryRouter>
    );
  });
});

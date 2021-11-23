import React from 'react';
import { render, screen } from '@testing-library/react';

import { MyComponent } from './my-component';
import { MemoryRouter, Route } from 'react-router-dom';

describe('MyComponent', () => {
  const testId = 'default-id';
  const link = '/route';
  it('should render MyComponent successfully', () => {
    const element = render(
      <MemoryRouter initialEntries={[{ pathname: '/one' }]}>
        <Route path="/one">
          <MyComponent myId={testId} link={link} />
        </Route>
      </MemoryRouter>
    );
    expect(element).toBeTruthy();
  });
});

import { render } from '@testing-library/react';
import React from 'react';
import {  Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { MyComponent } from '.';

describe('73035199', () => {
  test('should pass', () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <Router history={history}>
        <MyComponent />
      </Router>
    );
    history.push('/new-location');
  });
});

import { render } from '@testing-library/react';
import React from 'react';
import { Component } from './Component';
import reducer from './reducer';
import { StateProvider } from './StateProvider';

describe('Component', () => {
  it('should render correctly', () => {
    const prop1 = 'prop1';
    const prop2 = 'prop2';
    const prop3 = 'prop3';
    const mockContext = { initialState: [{ id: '' }] };
    render(
      <StateProvider initialState={mockContext} reducer={reducer}>
        <Component prop1={prop1} prop2={prop2} prop3={prop3} />
      </StateProvider>
    );
  });
});

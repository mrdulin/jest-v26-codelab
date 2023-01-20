import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import Component from './component';

it('Should pass', async () => {
  const mockStore = createMockStore();
  const store = mockStore();

  const mockUpdate = jest.fn((data) => console.log('HIT FUNCTION with ' + data));

  render(
    <Provider store={store}>
      <Component buttonText="Click me" myFunction={mockUpdate} />
    </Provider>
  );

  await userEvent.click(screen.getByTestId('test'));
  expect(store.getActions()).toEqual([{ type: 'MY_ACTION', agentData: 123 }]);
});

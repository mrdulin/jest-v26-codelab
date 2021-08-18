import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import CardLong from '.';

const mockStore = createMockStore();

describe('hoc hooks', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  test('should no render', () => {
    const store = mockStore({ favourite: { value: 123 } });
    act(() => {
      render(
        <Provider store={store}>
          <CardLong />
        </Provider>,
        container
      );
    });
    expect(container!.innerHTML).toMatchInlineSnapshot(`"<span>No render</span>"`);
  });
  test('should render card long', () => {
    const store = mockStore({ favourite: { value: 1 } });
    act(() => {
      render(
        <Provider store={store}>
          <CardLong name="teresa teng" />
        </Provider>,
        container
      );
    });
    expect(container!.innerHTML).toMatchInlineSnapshot(`"<div>card long</div>"`);
  });
});

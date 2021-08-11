import ConnectedHomePageDetails from './';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';

const mockStore = createMockStore();

jest.mock('./HomePageDetails', () => {
  function MockedHomePageDetails(props) {
    return (
      <div>
        <h1>mocked home page details</h1>
        <p data-testid="title">title: {props.title}</p>
        <p data-testid="link">link: {props.link}</p>
        <button data-testid="btn" onClick={() => props.getData()}>
          get data
        </button>
      </div>
    );
  }
  return MockedHomePageDetails;
});

describe('68733914', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('should pass', () => {
    const store = mockStore({ title: 'mocked title', link: 'mocked link' });
    act(() => {
      render(
        <Provider store={store}>
          <ConnectedHomePageDetails />
        </Provider>,
        container
      );
    });
    expect(container.querySelector("[data-testid='title']").textContent).toEqual('title: mocked title');
    expect(container.querySelector("[data-testid='link']").textContent).toEqual('link: mocked link');

    const button = container.querySelector('[data-testid=btn]');
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(store.getActions()).toEqual([{ type: 'GET_DATA' }]);
  });
});

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import CurrencyContextProvider, { CurrencyContext } from '.';

describe('70144273', () => {
  let container;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = undefined;
  });
  test('should pass', () => {
    let renderedContext;

    class Component extends React.PureComponent {
      static contextType = CurrencyContext;
      render() {
        renderedContext = this.context;
        return <button onClick={() => this.context.setCurrency('EUR')}>click me!</button>;
      }
    }

    act(() => {
      render(
        <CurrencyContextProvider>
          <Component />
        </CurrencyContextProvider>,
        container
      );
    });

    expect(renderedContext).toEqual({ selectedCurrency: 'USD', setCurrency: expect.any(Function) });

    const button = document.querySelector('button');
    expect(button?.innerHTML).toBe('click me!');

    act(() => {
      button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(renderedContext).toEqual({ selectedCurrency: 'EUR', setCurrency: expect.any(Function) });
  });
});

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';
import Analytics from './Analytics';

describe('68400320', () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('should pass', () => {
    const analyzeSpy = jest.spyOn(Analytics, 'analyze');
    jest.useFakeTimers();
    act(() => {
      render(<App />, container);
    });
    const button = document.querySelector('button');
    act(() => {
      button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      jest.advanceTimersByTime(2000);
    });
    expect(analyzeSpy).toBeCalledTimes(1);
  });
});

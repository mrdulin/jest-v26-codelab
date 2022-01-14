import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { About } from './';

describe('70535778', () => {
  let container: HTMLDivElement | null = null;
  let memoryHistory, pushSpy, replaceSpy;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    memoryHistory = createMemoryHistory();
    pushSpy = jest.spyOn(memoryHistory, 'push');
    replaceSpy = jest.spyOn(memoryHistory, 'push');
  });

  afterEach(() => {
    unmountComponentAtNode(container!);
    container!.remove();
    container = null;
    pushSpy.mockRestore();
    replaceSpy.mockRestore();
  });

  test('should pass', () => {
    act(() => {
      render(
        <Router history={memoryHistory}>
          <About />
        </Router>,
        container
      );
    });
    const a = container!.querySelector('a')!;
    Simulate.click(a, { defaultPrevented: false, button: 0 });
    expect(pushSpy).toBeCalledWith('/home');
  });
});

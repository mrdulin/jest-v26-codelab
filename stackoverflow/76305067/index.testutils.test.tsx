import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { MatchMediaMock } from 'match-media-mock';
import MyComponent from '.';

interface MockWindow extends Window {
  matchMedia: MatchMediaMock
}

describe('76305067', () => {
  let container: HTMLDivElement | null = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  test('should be sm', () => {
    (window as unknown as MockWindow).matchMedia.setConfig({
      type: 'screen',
      width: 700,
    })
    render(<MyComponent />, container)
  })
  test('should be md', () => {
    (window as unknown as MockWindow).matchMedia.setConfig({
      type: 'screen',
      width: 1000,
    })
    render(<MyComponent />, container)
  })
  test('should be lg', () => {
    (window as unknown as MockWindow).matchMedia.setConfig({
      type: 'screen',
      width: 1200,
    })
    render(<MyComponent />, container)
  })
})
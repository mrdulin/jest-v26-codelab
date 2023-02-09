import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ScrollWatcher } from './ScrollWatcher';

function scroll(scrollTop, offsetHeight) {
  const event = document.createEvent('Event');
  event.initEvent('scroll', true, true);

  Object.defineProperty(document.documentElement, 'scrollTop', {
    writable: true,
    configurable: true,
    value: scrollTop,
  });
  Object.defineProperty(document.documentElement, 'offsetHeight', {
    writable: true,
    configurable: true,
    value: offsetHeight,
  });
  window.dispatchEvent(event);
}

describe('ScrollWatcher', () => {
  it('should call the onReachBottom function when the user scrolls to the bottom of the page', () => {
    const onReachBottom = jest.fn();
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 50,
    });
    render(<ScrollWatcher onReachBottom={onReachBottom} />);
    scroll(0, 100);
    expect(onReachBottom).not.toHaveBeenCalled();
    scroll(50, 100);
    expect(onReachBottom).toHaveBeenCalled();
  });
});

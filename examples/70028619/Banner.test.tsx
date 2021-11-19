import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Banner from './Banner';

describe('70028619', () => {
  let container: HTMLDivElement | null = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container!);
    container?.remove();
    container = null;
  });

  test('should pass', () => {
    const mClose = jest.fn();
    act(() => {
      render(<Banner text="123" close={mClose} />, container);
    });
  });
});

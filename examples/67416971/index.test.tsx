import { App } from './';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';

describe('67416971', () => {
  it('should pass', () => {
    const logSpy = jest.spyOn(console, 'log');
    render(<App />);
    fireEvent(document.body, new CustomEvent('customEvent', { detail: 'teresa teng' }));
    expect(logSpy).toBeCalledWith('teresa teng');
  });
});

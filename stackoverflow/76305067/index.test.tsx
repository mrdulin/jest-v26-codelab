import React from 'react';
import { render } from '@testing-library/react';
import { MatchMediaMock } from 'match-media-mock';
import MyComponent from '.';

interface MockWindow extends Window {
  matchMedia: MatchMediaMock
}

describe('76305067', () => {
  test('should be sm', () => {
    (window as unknown as MockWindow).matchMedia.setConfig({
      type: 'screen',
      width: 700,
    })
    render(<MyComponent />)
  })
  test('should be md', () => {
    (window as unknown as MockWindow).matchMedia.setConfig({
      type: 'screen',
      width: 1000,
    })
    render(<MyComponent />)
  })
  test('should be lg', () => {
    (window as unknown as MockWindow).matchMedia.setConfig({
      type: 'screen',
      width: 1200,
    })
    render(<MyComponent />)
  })
})
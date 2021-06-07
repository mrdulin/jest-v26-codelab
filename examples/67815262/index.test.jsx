import React from 'react';
import { render } from '@testing-library/react';
import { MyComponent } from './';

describe('67815262', () => {
  it('should pass', () => {
    Object.defineProperty(window, 'performance', {
      value: {
        getEntriesByType: jest.fn().mockReturnValue([{ type: 'reload' }]),
        measure: jest.fn(),
      },
    });

    render(<MyComponent />);
  });
});

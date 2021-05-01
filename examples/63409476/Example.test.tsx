import React from 'react';
import { Example } from './Example';
import { render } from '@testing-library/react';

describe('Example', () => {
  it('should pass', () => {
    Object.defineProperty(window, 'location', {
      get() {
        return { href: 'stackoverflow.com' };
      },
    });
    render(<Example />);
  });
});

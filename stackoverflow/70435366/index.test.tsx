import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SomeComponent } from '.';

describe('Some Component', () => {
  it('Should render all', () => {
    const { container } = render(<SomeComponent />);
    const matches = container.querySelectorAll('p');
    expect(matches).toHaveLength(3);
    matches.forEach((m) => {
      expect(m).toBeInTheDocument();
    });
  });
});

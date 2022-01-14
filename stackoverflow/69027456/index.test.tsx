import { render } from '@testing-library/react';
import React from 'react';

function MyComponent() {
  return <main>my component</main>;
}

describe('69027456', () => {
  it('Should render correctly', () => {
    const { container } = render(<MyComponent />);
    expect(container).toMatchSnapshot();
  });
  it('Should render correctly - 2', () => {
    const { container } = render(<MyComponent />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

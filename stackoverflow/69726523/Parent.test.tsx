import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import ParentComponent from './Parent';

describe('69726523', () => {
  it('should render <ChildComponent /> after 4 seconds', async () => {
    const { findByTestId } = render(<ParentComponent />);

    const child = await findByTestId('child-component', {}, { timeout: 5000 });
    expect(child).toBeInTheDocument();
  });
});

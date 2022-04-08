import React, { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { CountProvider, useCount } from './component';

describe('useCount', () => {
  it('should save count when unmount and restore count', () => {
    const Wrapper: React.ComponentType = ({ children }) => {
      const [visible, setVisible] = useState(true);
      return (
        <CountProvider>
          {visible && children}
          <button data-testid="toggle" onClick={() => setVisible((pre) => !pre)}></button>
        </CountProvider>
      );
    };

    const Component = () => {
      const { count } = useCount();
      return <div data-testid="foo">{count}</div>;
    };

    const { getByTestId } = render(<Component />, { wrapper: Wrapper });
    expect(getByTestId('foo').textContent).toBe('0');

    fireEvent.click(getByTestId('toggle')); // unmount the Component
    fireEvent.click(getByTestId('toggle')); // mount the Component again
    expect(getByTestId('foo').textContent).toBe('50');
  });
});

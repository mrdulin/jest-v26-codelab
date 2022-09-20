import { render } from '@testing-library/react';
import React from 'react';
import { Grid } from 'antd';

const { useBreakpoint } = Grid;

describe('72021761', () => {
  test('should pass', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(
        (query) =>
          ({
            addListener: (cb: (e: { matches: boolean }) => void) => {
              cb({ matches: query === '(max-width: 575px)' });
            },
            removeListener: jest.fn(),
            matches: query === '(max-width: 575px)',
          } as any)
      ),
    });

    let screensVar;
    function Demo() {
      const screens = useBreakpoint();
      screensVar = screens;
      return <div />;
    }
    render(<Demo />);

    expect(screensVar).toEqual({
      xs: true,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xxl: false,
    });
  });
});

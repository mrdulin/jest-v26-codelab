import { render } from '@testing-library/react';
import React from 'react';
import { MyComponent, MyContext } from './MyComponent';

describe('70068118', () => {
  it('should scroll into AnotherComponent when date is updated', () => {
    const mScrollIntoView = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = mScrollIntoView;

    const { rerender } = render(
      <MyContext.Provider value={{ date: '' }}>
        <MyComponent />
      </MyContext.Provider>
    );
    expect(mScrollIntoView).not.toBeCalled();

    rerender(
      <MyContext.Provider value={{ date: '2021-11-01' }}>
        <MyComponent />
      </MyContext.Provider>
    );
    expect(mScrollIntoView).toBeCalled();
  });
});

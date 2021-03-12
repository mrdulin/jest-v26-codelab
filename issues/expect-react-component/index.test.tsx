import React from 'react';
import { Loading, MyComponent } from './';
import ReactDOM from 'react-dom';

describe('MyComponent', () => {
  it('should pass', () => {
    const renderSpy = jest.spyOn(ReactDOM, 'render');
    MyComponent.show();
    const loadingContainer = document.body.querySelector('.loading-container');
    // 1. failed
    // expect(renderSpy).toBeCalledWith(expect.any(Loading), loadingContainer);

    // 2. TS type error
    // expect(renderSpy).toBeCalledWith(Loading, loadingContainer);

    // 3. TS type error, but works if type case to any
    expect(renderSpy).toBeCalledWith((<Loading className="loading" />) as any, loadingContainer);

    // 4. success!
    expect(renderSpy).toBeCalledWith(renderSpy.mock.calls[0][0], loadingContainer);
  });
});

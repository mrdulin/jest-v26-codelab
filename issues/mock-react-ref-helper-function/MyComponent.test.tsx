import React from 'react';
import { MyComponent } from './MyComponent';
import { mockRefReturnValueOnce } from './mockRef';
import { mount } from 'enzyme';

describe('mock react ref helper function', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should pass', () => {
    mockRefReturnValueOnce(MyComponent, 'wrapperRef', 'getBoundingClientRect', { width: 50 });
    mockRefReturnValueOnce(MyComponent, 'contentRef', 'getBoundingClientRect', { width: 100 });
    mount(<MyComponent />);
  });
});

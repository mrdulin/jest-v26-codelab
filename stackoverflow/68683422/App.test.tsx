import { mount } from 'enzyme';
import React from 'react';
import { App } from './App';

describe('App', () => {
  test('should has image', () => {
    function Test() {
      return (
        <App>
          <img src="" alt="" />
          123
        </App>
      );
    }
    mount(<Test />);
  });

  test('should not has image', () => {
    function Test() {
      return (
        <App>
          <span>123</span>
          456
        </App>
      );
    }
    mount(<Test />);
  });
});

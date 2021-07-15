import { mount } from 'enzyme';
import React from 'react';
import App from './';

describe('68381268', () => {
  test('should pass', () => {
    const wrapper = mount(<App nextAccent />);
    let nextButton = wrapper.find('.button_next.accent').exists();
    expect(nextButton).toBeTruthy();
  });
});

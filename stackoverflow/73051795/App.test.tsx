import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { act } from 'react-dom/test-utils';

describe('App', () => {
  test('renders without error', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.App').exists()).toBe(true);
  });

  test('renders learn react link', () => {
    jest.useFakeTimers();
    const wrapper = mount(<App />);
    act(() => {
      jest.advanceTimersByTime(4000);
    })
    wrapper.update();
    console.log(wrapper.debug());
    expect(wrapper.find('.App-link').text()).toBe('Learn React');
  });
});

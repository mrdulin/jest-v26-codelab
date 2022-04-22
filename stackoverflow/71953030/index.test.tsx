import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { RatingsAndReviews } from '.';

describe('RatingsAndReviews', () => {
  it('Should run handleLoad function onMount', () => {
    jest.useFakeTimers();
    const wrapper = mount(<RatingsAndReviews />);
    window.dispatchEvent(new Event('load'));
    expect(wrapper.text()).toBe('not loaded');
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(wrapper.text()).toBe('loaded');
  });
});

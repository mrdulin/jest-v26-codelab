import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { SomeComponent } from './SomeComponent';

describe('67440874', () => {
  let wrapper: ReactWrapper;

  beforeAll(() => {
    jest.useFakeTimers();
    wrapper = mount(<SomeComponent />);
  });
  it('should pass', () => {
    let notifyButton = wrapper.find('StyledNotifyButton');
    expect(notifyButton.prop('visible')).toBe(false);
    act(() => {
      jest.runOnlyPendingTimers();
    });
    wrapper.update();
    expect(wrapper.find('StyledNotifyButton').prop('visible')).toBeTruthy();
  });
});

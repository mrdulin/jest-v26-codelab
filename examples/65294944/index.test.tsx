import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { MyComponent } from './';

describe('should update the state', () => {
  it('should pass', () => {
    const mockUpdateMyState = jest.fn();
    let renderedComponent;
    act(() => {
      renderedComponent = mount(<MyComponent myProp="red" updateMyState={mockUpdateMyState} />);
    });
    expect(mockUpdateMyState).toHaveBeenCalledWith('crimson');
    act(() => {
      renderedComponent.setProps({ myProp: 'blue' });
    });
    expect(mockUpdateMyState).toHaveBeenCalledWith('azure');
  });
});

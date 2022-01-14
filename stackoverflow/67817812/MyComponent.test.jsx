import { mount } from 'enzyme';
import React from 'react';
import { MyComponent } from './MyComponent';

describe('67817812', () => {
  it('onmousedown U button', async () => {
    const preventDefault = jest.fn();
    const component = mount(<MyComponent />);

    component.find('.text-button-style').at(0).invoke('onMouseDown')({ preventDefault });
    expect(preventDefault).toBeCalledTimes(1);
  });
});

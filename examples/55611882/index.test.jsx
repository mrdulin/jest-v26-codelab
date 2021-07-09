import { shallow } from 'enzyme';
import React from 'react';
import Component from '.';

describe('55611882', () => {
  it('should pass', () => {
    const mockClickFunction = jest
      .spyOn(Component.prototype, 'clickFunction')
      .mockImplementation(() => console.log('Mock Click fn'));

    const wrapper = shallow(<Component />);
    wrapper.find('[data-test-id="button"]').simulate('click');
    expect(mockClickFunction).toBeCalledTimes(1);
    mockClickFunction.mockRestore();
  });
});

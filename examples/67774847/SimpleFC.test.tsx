import { shallow } from 'enzyme';
import React from 'react';
import { SimpleFC } from './SimpleFC';

describe('67774847', () => {
  it('should pass', () => {
    const logSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<SimpleFC />);
    wrapper.invoke('callback')();
    expect(logSpy).toBeCalledWith('Do Stuffs');
    logSpy.mockRestore();
  });
});

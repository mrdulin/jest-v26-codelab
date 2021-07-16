import { PersonsList } from './PersonsList';
import axios from 'axios';
import React from 'react';
import { shallow } from 'enzyme';

jest.mock('axios');

const mockData = [{ gender: 'female' }];

describe('68393613', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PersonsList />);
  });
  test('should pass', () => {
    axios.mockResolvedValue({ data: mockData });
    const resetButton = wrapper.find('#reset');
    resetButton.simulate('click');
  });
});

import React from 'react';
import { shallow, mount } from 'enzyme';
import GridContainer from './GridContainer';
import { useDispatch, useSelector } from 'react-redux';

const mockDispatch = jest.fn();
const booksMock = [
  { id: 1, name: 'golang' },
  { id: 2, name: 'TypeScript' },
];

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn(() => booksMock),
    useDispatch: jest.fn(() => mockDispatch),
  };
});

describe('react hooks', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders container', () => {
    const wrapper = shallow(<GridContainer />);
    const component = wrapper.find('.book-container');
    expect(component.length).toBe(1);
  });

  it('runs dispatch on mount', () => {
    const wrapper = mount(<GridContainer />);
    expect(useDispatch).toBeCalledTimes(1);
    expect(useSelector).toBeCalledWith(expect.any(Function));
    expect(mockDispatch).toBeCalledWith({ type: 'GET_DATA' });
    expect(wrapper.find('.book-container').children()).toHaveLength(2);
  });
});

import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { useDispatch } from 'react-redux';
import AddTask from './AddTask';

const mDispatch = jest.fn();

jest.mock('react-redux', () => {
  const originalModule = jest.requireActual('react-redux');
  return {
    ...originalModule,
    useDispatch: jest.fn(() => mDispatch),
  };
});

describe('Task:', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<AddTask />);
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('called handleKeyDown fn', () => {
    wrapper.find('input').simulate('keydown', { which: 13, target: { value: 'teresa teng' } });
    expect(useDispatch).toBeCalledTimes(1);
    expect(mDispatch).toBeCalledWith({ type: 'todoAdd', payload: 'teresa teng' });
  });
});

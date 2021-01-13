import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MyInput from './MyInput';
import data from './data.json';

describe('MyInput', () => {
  it('should trigger onChange with selected option', () => {
    expect.assertions(6);
    let events = [];
    const onChange = jest.fn().mockImplementation((e) => {
      e.persist();
      events.push(e);
    });
    const list = [...data.list];
    const screen = render(<MyInput onChange={onChange} list={list} id="test" />);
    userEvent.type(screen.getByLabelText('datalist-items'), 'first');
    expect(onChange).toBeCalledTimes(5);
    events.forEach((e) => {
      expect(onChange).toHaveBeenCalledWith(e);
    });
  });
});

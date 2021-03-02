import { mount } from 'enzyme';
import React, { ChangeEvent } from 'react';
import MyComponent from '.';

class Test extends React.Component<{ onChange?: (e: ChangeEvent<HTMLInputElement>) => void }> {
  render() {
    return <input {...this.props} />;
  }
}

describe('react-cloneElement-enzyme-change-event', () => {
  it('should handle change event', () => {
    const logSpy = jest.spyOn(console, 'log');
    const onChange = jest.fn();
    const wrapper = mount(
      <MyComponent>
        <Test onChange={onChange} />
        <Test />
      </MyComponent>
    );
    const input = wrapper.find('div').children().at(0).find('input');
    expect(jest.isMockFunction(input.prop('onChange'))).toBeFalsy();
    const event = {} as ChangeEvent<HTMLInputElement>;
    input.invoke('onChange')!(event);
    expect(onChange).toBeCalledWith({});
    expect(logSpy).toBeCalledWith('handle change event');
  });
});

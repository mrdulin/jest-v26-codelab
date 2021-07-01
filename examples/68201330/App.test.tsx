import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Click } from './App';

class Setup<Props> {
  constructor(FunctionComponent: React.FC<Props>, props: Props) {
    return mount(<FunctionComponent {...props} />);
  }
}

describe('68201330', () => {
  test('it should pass', () => {
    const wrapper = new Setup(Click, { counter: 0 }) as ReactWrapper;
    // break the hooks of rule
    // const wrapper = mount(Click({ counter: 0 }));
    expect(wrapper.find(`[data-test="counter"]`)).toHaveLength(1);
  });
});

import { mount } from 'enzyme';
import MyComponent from './MyComponent';
import Input from './Input';

describe('48088489', () => {
  it('should render input', () => {
    const wrapper = mount(<MyComponent />);
    expect(wrapper.find(Input)).toHaveLength(1);
    expect(wrapper.instance().refInput).toBeInstanceOf(Input);
  });
});

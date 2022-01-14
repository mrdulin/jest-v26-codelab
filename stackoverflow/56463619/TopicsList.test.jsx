import { TopicsList } from './TopicsList';
import { shallow, mount } from 'enzyme';

describe('56463619', () => {
  it('should render 3 li items - 1', () => {
    const wrapper = shallow(<TopicsList />);
    console.log(wrapper.find('ul').childAt(0).debug());
    console.log(wrapper.find('ul').childAt(0).dive().debug());
    expect(wrapper.find('ul').children().length).toEqual(3);
  });

  it('should render 3 li items - 2', () => {
    const wrapper = mount(<TopicsList />);
    expect(wrapper.find('li').length).toEqual(3);
  });
});

import { Plugins } from './plugin';
import { shallow } from 'enzyme';

const pluginsData = [{ plugin: 'Apps (Coming soon)' }];

const wrapper = shallow(<Plugins pluginsData={pluginsData} />);

describe('test home page', () => {
  it('should render home page successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct text in item', () => {
    expect(wrapper.find('.up-coming-text').get(0).props.children).toEqual('Apps (Coming soon)');
  });

  it('renders pluginsData length', () => {
    expect(wrapper.find('.up-coming-text')).toBeDefined();
    expect(wrapper.find('.up-coming-text').length).toEqual(pluginsData.length);
  });
});

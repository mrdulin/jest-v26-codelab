import { shallow } from 'enzyme';
import { DocumentFromCounterCompany } from '.';
import { getChannel } from './api';

jest.mock('./api');

function flushPromises() {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

describe('68267026', () => {
  it('should pass', async () => {
    getChannel.mockResolvedValueOnce({ data: { channel: 100 } });
    const wrapper = shallow(<DocumentFromCounterCompany />);
    await flushPromises();
    expect(wrapper.state('workedOnDataTotalElementCount')).toEqual(100);
  });
});

import React from 'react';
import { shallow } from 'enzyme';

jest.mock('./Elements', () => ({
  SortIndicator: (props) => <div {...props}>mocked SortIndicator</div>,
  ExchangeRate: (props) => <div {...props}>mocked ExchangeRate</div>,
}));

describe('68279075', () => {
  it('should pass', async () => {
    const MainContainer = (await import('./main')).default;
    const wrapper = shallow(<MainContainer />);
    console.log(wrapper.debug());
  });
});

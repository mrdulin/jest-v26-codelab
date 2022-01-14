import React from 'react';
import { mount } from 'enzyme';

jest.mock('./Elements', () => ({
  SortIndicator: (props) => <div {...props}>mocked SortIndicator</div>,
  ExchangeRate: (props) => <div {...props}>mocked ExchangeRate</div>,
}));

describe('68279075', () => {
  it('should pass', async () => {
    const MainContainer = (await import('./main')).default;
    const wrapper = mount(<MainContainer />);
    console.log(wrapper.debug());
  });
});

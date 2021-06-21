import { shallow } from 'enzyme';
import React from 'react';
import { NavBar } from './NavBar';
import { createMemoryHistory } from 'history';

describe('57703870', () => {
  it('should invoke the handleLogout function when logout is clicked', () => {
    const historyMock = createMemoryHistory({ initialEntries: ['/home'] });
    const props = {
      logoutUser: jest.fn(),
      userDetails: { username: 'steve', id: 123 },
      history: historyMock,
    };
    const wrapper = shallow(<NavBar {...props} />);
    expect(props.history.location.pathname).toEqual('/home');
    const button = wrapper.find('[data-test="logout"]');
    const mEvent = { preventDefault: jest.fn() };
    button.simulate('click', mEvent);
    expect(mEvent.preventDefault).toBeCalledTimes(2);
    expect(props.logoutUser).toBeCalledTimes(1);
    expect(props.history.location.pathname).toEqual('/');
  });
});

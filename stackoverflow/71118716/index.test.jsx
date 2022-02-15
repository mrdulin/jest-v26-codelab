import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import { createStore } from 'redux';

import HeaderContainer from './header';
import UpgradeBlock from './';

const rootReducer = (state = { environment: { isHybrid: false } }) => state;
const store = createStore(rootReducer);
const MockProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

function UpgradeBlockWithStore({ history, ...props } = {}) {
  return mount(
    <Router history={history}>
      <MockProvider>
        <UpgradeBlock {...props} />
      </MockProvider>
    </Router>
  );
}

describe('71118716', () => {
  test('should pass', () => {
    const history = createMemoryHistory();
    const wrapper = UpgradeBlockWithStore({ history });
    const headerContainer = wrapper.find(HeaderContainer);
    expect(headerContainer.exists()).toBe(true);
  });
});

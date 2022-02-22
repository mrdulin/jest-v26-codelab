import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { ClassComponent, FunctionComponent } from '.';

const store = createStore(() => {});

describe('71204270', () => {
  test('instance is null for function component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <FunctionComponent />
        </BrowserRouter>
      </Provider>
    );

    console.log(wrapper.find(FunctionComponent).instance());
  });

  test('instance is class instance ', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ClassComponent />
        </BrowserRouter>
      </Provider>
    );

    console.log(wrapper.find(ClassComponent).instance());
  });
});

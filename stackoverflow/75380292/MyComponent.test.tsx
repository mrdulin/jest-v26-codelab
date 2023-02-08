import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MyComponent, MyComponentProps } from './MyComponent';

describe('75380292', () => {
  it('calls updateTitle when newItems changes', () => {
    const store = createStore((state) => state);

    const wrapper = mount(
      <Provider store={store}>
        <MyComponent newItems={0} />
      </Provider>
    );

    const MyComponentWrapper = wrapper.find(MyComponent);
    const spy = jest.spyOn(MyComponentWrapper.instance() as any, 'updateTitle');

    wrapper.setProps({
      children: <MyComponent newItems={1} />,
    });
    wrapper.update();

    expect(spy).toHaveBeenCalled();
  });
});

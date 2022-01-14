import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { MyComponent, ShowStatus } from './';

describe('MyComponent', () => {
  it('should send OK when success', () => {
    const props = { secret: 'SECRET_KEY' };
    const wrapper = mount(
      <MemoryRouter initialEntries={[{ search: '?status=success' }]}>
        <MyComponent {...props} />
      </MemoryRouter>
    );
    expect(wrapper.find(ShowStatus).props().message).toEqual('OK');
    expect(wrapper.find(MyComponent).props().secret).toEqual(props.secret);
  });

  it('should send NOT OK when error', () => {
    const props = { secret: 'SECRET_KEY' };
    const wrapper = mount(
      <MemoryRouter initialEntries={[{ search: '?status=error' }]}>
        <MyComponent {...props} />
      </MemoryRouter>
    );

    expect(wrapper.find(ShowStatus).props().message).toEqual('NOT OK');
    expect(wrapper.find(MyComponent).props().secret).toEqual(props.secret);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import { MyComponent } from './MyComponent';

describe('Render MyComponent Component', () => {
  let wrapper;
  beforeEach(() => {
    moxios.install();
    wrapper = shallow(<MyComponent></MyComponent>);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should call getAllData API Success', (done) => {
    const responseData = {
      status: 200,
      response: [1, 2, 3],
    };
    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith(responseData).then(() => {
        expect(wrapper.state('allStatus')).toHaveLength(3);
        done();
      });
    });
  });
});

import { shallow } from 'enzyme';
import React from 'react';

describe('68768758', () => {
  let ComponentElement;
  beforeEach(() => {
    jest.resetModules();
  });
  test('should render others', () => {
    ComponentElement = require('.').default;
    const wrapper = shallow(<ComponentElement />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div>
        others
      </div>
    `);
  });

  test('should render icon', () => {
    jest.doMock('./config.json', () => ({ isFlag: true }));
    ComponentElement = require('.').default;
    const wrapper = shallow(<ComponentElement />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div>
        ArrowForwardIosIcon
      </div>
    `);
  });
});

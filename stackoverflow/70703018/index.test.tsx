import { shallow } from 'enzyme';
import React from 'react';
import { layoutWrap } from './';

function Test(props: { span: number }) {
  return <div>span: {props.span}</div>;
}

describe('70703018', () => {
  test('should pass 1', () => {
    const LayoutWrapTest = layoutWrap(Test);
    const wrapper = shallow(<LayoutWrapTest span={8} />);
    expect(wrapper.find(Test).exists()).toBeTruthy();
    expect(wrapper.find(Test).props()).toEqual({ span: 8 });
  });

  test('should pass 2', () => {
    const LayoutWrapTest = layoutWrap(Test);
    const wrapper = shallow(<LayoutWrapTest span={8} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <Fragment>
        <Test
          span={8}
        />
      </Fragment>
    `);
  });
});

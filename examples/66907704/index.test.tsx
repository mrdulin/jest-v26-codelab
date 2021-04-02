import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { SearchForm } from './';

describe('66907704', () => {
  it('should handle onChange event', () => {
    const testRenderer = TestRenderer.create(<SearchForm />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType('input').props.value).toEqual('');
    const mEvent = { target: { value: 'teresa teng' } };
    act(() => {
      testInstance.findByType('input').props.onChange(mEvent);
    });
    expect(testInstance.findByType('input').props.value).toEqual('teresa teng');
  });

  it('should handle onChange event when use shallow render', () => {
    const shallowRenderer = ShallowRenderer.createRenderer();
    shallowRenderer.render(<SearchForm />);
    let tree = shallowRenderer.getRenderOutput();
    let input = tree.props.children[0];
    const mEvent = { target: { value: 'teresa teng' } };
    input.props.onChange(mEvent);
    tree = shallowRenderer.getRenderOutput();
    input = tree.props.children[0];
    expect(input.props.value).toEqual('teresa teng');
  });
});

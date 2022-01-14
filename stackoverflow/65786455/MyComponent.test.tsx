import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { MyComponent } from './MyComponent';
import InputComponent from './InputComponent';

describe('65786455', () => {
  it('runs handleChange', () => {
    const props = {
      actions: {
        someAction: jest.fn(),
      },
      input: 'some input value',
    };

    const component = renderer.create(<MyComponent {...props} />);
    const inputSelect = component.root.findByType(InputComponent).props;
    expect(inputSelect.input.value).toBe('');
    act(() => {
      inputSelect.handleChange(props.input);
    });
    expect(component.root.findByType(InputComponent).props.input.value).toBe('some input value');
  });
});

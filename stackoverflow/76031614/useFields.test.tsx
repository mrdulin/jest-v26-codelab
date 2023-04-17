import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { useFields } from './useFields';

describe('useFields', () => {
  const setup = () => {
    const { result } = renderHook(useFields, {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });
    return result.current();
  };

  it('Must be an array of arrays', () => {
    const getFields = setup();
    expect(Array.isArray(getFields)).toBeTruthy();
  });

  it('An array with index 0 must have certain properties and structure', () => {
    const getFields = setup()[0];
    expect(getFields).toHaveLength(1);
    expect(getFields[0]).toEqual(
      expect.objectContaining({
        label: expect.any(String),
        valueKey: expect.any(String),
        setValue: expect.any(Function),
      })
    );
  });

  test('should set email value correctly', () => {
    expect.assertions(1);
    const getFields = setup()[0];
    const firstField = getFields[0];
    store.subscribe(() => {
      expect(store.getState().regsitration.data).toEqual({
        email: {
          value: 'test@example.com',
          error: false,
          errorText: '',
        },
      });
    });
    firstField.setValue('test@example.com');
  });
});

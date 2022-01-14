import { render } from '@testing-library/react';
import React from 'react';
import * as ReactQuery from 'react-query';

describe('70660790', () => {
  test('should pass', () => {
    jest.spyOn(ReactQuery, 'useQuery').mockImplementation();
    function Test() {
      ReactQuery.useQuery('todos');
      return null;
    }
    render(<Test />);
    expect(ReactQuery.useQuery).toBeCalledWith('todos');
  });
});

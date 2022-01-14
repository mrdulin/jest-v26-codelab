import React from 'react';
import { render } from '@testing-library/react';
import { MyComponent } from './MyComponent';

jest.mock('./SearchBox', () => {
  const { MockedSearchBox } = require('./testUtil');

  return {
    SearchBox: MockedSearchBox,
  };
});

describe('My component', () => {
  test('that my component shows text', () => {
    const { getByText } = render(<MyComponent />);
    expect(getByText('Search mock text')).toBeDefined();
  });
});

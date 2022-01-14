import { render } from '@testing-library/react';
import React from 'react';
import App from './';

jest.mock('./child1', () => ({ Child1: () => 'mocked child1' }));
jest.mock('./child2', () => ({ Child2: () => 'mocked child2' }));

describe('67636326', () => {
  it('should pass', () => {
    const { container } = render(<App />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        mocked child1
        mocked child2
      </div>
    `);
  });
});

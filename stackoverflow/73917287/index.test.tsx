import { render } from '@testing-library/react/pure';
import React from 'react';

const Component = ({ prop1 }) => <div>{prop1}</div>;

describe('Some test', () => {
  const { rerender, asFragment } = render(<Component prop1={0} />);

  test('Title 1', () => {
    rerender(<Component prop1={0} />);
    // logic1
    expect(asFragment().firstChild).toMatchInlineSnapshot(`
      <div>
        0
      </div>
    `);
  });

  test('Title 2', () => {
    rerender(<Component prop1={1} />);
    // logic2
    expect(asFragment().firstChild).toMatchInlineSnapshot(`
      <div>
        1
      </div>
    `);
  });
});

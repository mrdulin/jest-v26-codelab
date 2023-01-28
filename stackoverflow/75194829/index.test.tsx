import { render } from '@testing-library/react';
import React from 'react';

const TestComp = () => {
  return (
    <>
      <ul>
        {[
          { name: 'apple', products: ['a', 'b', 'c'] },
          { name: 'sony', products: ['x', 'y', 'z'] },
        ].map((brand) => (
          <li key={brand.name}>
            {brand.name}
            <ul>
              {brand.products.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

describe('75194829', () => {
  test('should pass', () => {
    const { container } = render(<TestComp />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

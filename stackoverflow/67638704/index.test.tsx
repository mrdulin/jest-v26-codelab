import { render } from '@testing-library/react';
import React from 'react';
import { ParentComp } from './';

describe('67638704', () => {
  it('should match snapshot', () => {
    const { container } = render(<ParentComp id="1" />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="wrapper"
        >
          <div>
            Download
          </div>
        </div>
      </div>
    `);
  });
});

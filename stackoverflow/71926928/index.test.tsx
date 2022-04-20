import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { App } from '.';

describe('<App />', () => {
  it('should render the App', async () => {
    const { container, findByTestId } = render(<App />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        <h1>
          Loading…
        </h1>
      </div>
    `);
    const mycomp = await findByTestId('test');
    expect(mycomp).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        data-testid="test"
      />
    `);
  });
});

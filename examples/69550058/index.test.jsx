import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientPortal from './';

function TestChild() {
  return <div>child</div>;
}
describe('69550058', () => {
  test('should pass', () => {
    const main = document.createElement('main');
    const portalContainer = document.createElement('div');
    portalContainer.id = 'portal-container';
    document.body.appendChild(portalContainer);
    const { container } = render(
      <ClientPortal selector={'#portal-container'}>
        <TestChild />
      </ClientPortal>,
      { container: document.body.appendChild(main) }
    );
    expect(screen.getByText(/child/)).toBeInTheDocument();
    expect(portalContainer.innerHTML).toEqual('<div>child</div>');
    expect(container).toMatchInlineSnapshot(`<main />`);
  });
});

import { render, screen, act } from '@testing-library/react';
import ReactDOMServer from 'react-dom/server';
import '@testing-library/jest-dom';
import React from 'react';

describe('Test', () => {
  it('should CSR', () => {
    render(<div data-testid="output">Test</div>);

    expect(screen.getByTestId('output')).toHaveTextContent('Test');
  });

  it('should SSR', () => {
    const ui = <div data-testid="output">Test</div>;
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.innerHTML = ReactDOMServer.renderToString(ui);

    render(ui, { hydrate: true, container });

    expect(screen.getByTestId('output')).toHaveTextContent('Test');
  });
});

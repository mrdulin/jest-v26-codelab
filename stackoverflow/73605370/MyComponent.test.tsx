import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MyComponent } from './MyComponent';

describe('73605370', () => {
  let $root: HTMLDivElement;
  let $modalContainer: HTMLDivElement;
  beforeEach(() => {
    $root = document.createElement('div');
    $root.id = 'root';
    $modalContainer = document.createElement('div');
    $modalContainer.id = 'modal-div';
    document.body.appendChild($root);
    document.body.appendChild($modalContainer);
  });
  afterEach(() => {
    document.body.removeChild($root);
    document.body.removeChild($modalContainer);
  });
  test('should pass', async () => {
    render(<MyComponent />, { container: $root });
    const $button = screen.getByText(/open modal/i);
    expect(screen.queryByText(/modal content/i)).not.toBeInTheDocument();
    fireEvent.click($button);
    expect(screen.queryByText(/modal content/i)).toBeInTheDocument();
  });
});

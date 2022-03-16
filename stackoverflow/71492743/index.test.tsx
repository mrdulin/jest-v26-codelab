import List from './';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

let data = ['one', 'two', 'three'];

describe('Component: List', () => {
  // let { container } = render(<List items={data} />);

  test('(1) list length', () => {
    let { container } = render(<List items={data} />);
    let li = container.querySelectorAll('li');
    expect(li.length).toBe(3);
  });

  test('(2) values in list', () => {
    render(<List items={data} />);
    expect(screen.getByText('one')).toBeInTheDocument();
    expect(screen.getByText('two')).toBeInTheDocument();
    expect(screen.getByText('three')).toBeInTheDocument();
  });
});

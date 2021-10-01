import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyComponent from '.';

jest.mock('./hooks', () => {
  const { useTodos } = jest.requireActual('./hooks');
  return {
    useTodos: () => useTodos(['Wake up', 'Go to work']),
  };
});

describe('69399677', () => {
  test('should render todos', () => {
    render(<MyComponent />);
    expect(screen.getByText(/Wake up/)).toBeInTheDocument();
    expect(screen.getByText(/Go to work/)).toBeInTheDocument();
  });
  test('should add todo', () => {
    render(<MyComponent />);
    fireEvent.click(screen.getByText(/Add/));
    expect(screen.getByText(/have a drink/)).toBeInTheDocument();
  });
  test('should remove todo', () => {
    render(<MyComponent />);
    fireEvent.click(screen.getByText(/Go to work/).querySelector('button'));
    expect(screen.queryByText(/Go to work/)).not.toBeInTheDocument();
  });
});

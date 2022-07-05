import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { MyElement } from './MyElement';

describe('72858536', () => {
  test('should pass', async () => {
    let _resolve;
    const onRemoveMock = () => new Promise((resolve) => (_resolve = resolve));
    render(<MyElement onRemove={onRemoveMock} />);
    fireEvent.click(screen.getByText(/remove/i));
    expect(screen.getByText(/busy/)).toBeInTheDocument();
    _resolve();
    expect(await screen.findByText(/selected/)).toBeInTheDocument();
  });
});

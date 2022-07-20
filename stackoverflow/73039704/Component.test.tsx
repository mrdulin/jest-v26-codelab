import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ComponentToBeTested from './Component';
import TestContextProvider from './TestContext';

describe('73039704', () => {
  test('should pass', () => {
    render(
      <TestContextProvider>
        <ComponentToBeTested />
      </TestContextProvider>
    );
    expect(screen.getByTestId('answer')).toHaveTextContent('1');
    const button = screen.getByTestId('increment-button');
    fireEvent.click(button);
    expect(screen.getByTestId('answer')).toHaveTextContent('2');
  });
});

import { render, screen } from '@testing-library/react';
import React from 'react';

function TestComp() {
  return (
    <>
      <input placeholder="DD/MM/YYYY" />
      <input placeholder="DD/MM/YYYY" />
    </>
  );
}

describe('71135888', () => {
  test('should pass', () => {
    render(<TestComp />);
    const inputs = screen.getAllByPlaceholderText('DD/MM/YYYY');
    console.log(inputs[0]);
  });
});

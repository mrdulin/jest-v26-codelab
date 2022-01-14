import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

// https://stackoverflow.com/questions/70700684/best-way-to-test-a-text-in-a-div-or-p-tag-in-react-testing-library/70705450#70705450
function Test() {
  return <div style={{ display: 'none' }}>test</div>;
}

describe('toBeVisible-VS-toBeInDocument', () => {
  test('should pass', () => {
    render(<Test />);
    expect(screen.getByText(/test/)).not.toBeVisible();
    expect(screen.getByText(/test/)).toBeInTheDocument();
  });

  test('should pass 2', () => {
    render(<Test />);
    // screen.getByText(`Welcome John Doe!`);
  });
});

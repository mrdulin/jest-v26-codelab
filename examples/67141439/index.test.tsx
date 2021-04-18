import { MyComponent } from './';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

function MockedOtherComponent() {
  return <div>mocked other component</div>;
}

jest.mock('./OtherComponent', () => {
  return MockedOtherComponent;
});

describe('67141439', () => {
  it('should pass', async () => {
    render(<MyComponent />);
    const textToMatch = await screen.findByText(/mocked other component/);
    expect(textToMatch).toBeInTheDocument();
  });
});

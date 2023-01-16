import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { App } from './App';
import MyComponent from './MyComponent';

jest.mock('./MyComponent');

const MyComponentMock = MyComponent as jest.MockedFunction<typeof MyComponent>;

describe('75113485', () => {
  test('should pass - 1', () => {
    MyComponentMock.mockImplementation(() => {
      return <div>My mocked component</div>;
    });
    render(<App />);
    expect(screen.getByText('My mocked component')).toBeInTheDocument();
  });

  test('should pass - 2', () => {
    MyComponentMock.mockImplementation(() => {
      return (
        <div>
          Now my component has an input
          <input type="text" />
        </div>
      );
    });
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});

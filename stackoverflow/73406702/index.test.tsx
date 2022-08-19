import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ChildComponent } from './';

describe('73406702', () => {
  test('should pass', () => {
    const prevState = { name: 'Rob', age: 55 };
    let nextState;
    const mockSetter = jest.fn().mockImplementation((callback) => {
      nextState = callback(prevState);
    });
    render(<ChildComponent state={prevState} setState={mockSetter} />);
    fireEvent.click(screen.getByText(/ChildComponent/));
    expect(nextState).toEqual({ name: 'Alice', age: 55 });
  });
});

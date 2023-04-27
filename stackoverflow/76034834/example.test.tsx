import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import React from "react"
import { Example } from "./example"

describe('76034834', () => {
  test('should pass', () => {
    jest
      .useFakeTimers('modern')
      .setSystemTime(new Date('2015-12-20'));
    render(<Example />);
    const input = screen.getByDisplayValue('12/20/2015');
    fireEvent.change(input, { target: { value: new Date('2014-01-02') } });
    expect(screen.getByDisplayValue('01/02/2014')).toBeInTheDocument();
  })
})
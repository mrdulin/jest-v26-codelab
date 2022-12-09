import { render, screen } from "@testing-library/react";
import React from "react";

function disableLog() {
  const consoleLogMock = jest.spyOn(console, 'log').mockImplementation(() => { });
  return function enableLog() {
    consoleLogMock.mockRestore();
  }
}

describe('74726842', () => {
  test('should pass', () => {
    const enableLog = disableLog()
    const TestComp = () => {
      console.log('test comp render');
      return <div>test</div>
    }
    render(<TestComp />);
    enableLog();
    screen.debug();
  })
})
import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { MyComponent } from '.'

describe('73857318', () => {
  test('should pass', () => {
    render(<MyComponent />)
    const transitionEventInit = {
      propertyName: "margin-left",
      elapsedTime: 100,
      pseudoElement: ""
    }
    fireEvent.transitionEnd(screen.getByTestId('root'), transitionEventInit);
  })
})
import { render, screen, fireEvent } from "@testing-library/react";
import MainComponent from "./mainComponent";
import React from "react";

describe('75909442', () => {
  it("should change input element value", () => {
    render(<MainComponent />);
    const inputEl = screen.getAllByRole("textbox")[0];
    fireEvent.change(inputEl, { target: { value: "fakeValue214353" } });
    const inputElAfterValueChange = screen.getAllByRole("textbox")[0];
    expect(inputElAfterValueChange.getAttribute("value")).toEqual('fakeValue214353');
  });
})
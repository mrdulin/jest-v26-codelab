import React from "react";
import Tags from "./Tags";
import { mount } from "enzyme";
import ReactRouterDom from "react-router-dom";

const mHistory = {
  push: jest.fn(),
};

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as typeof ReactRouterDom),
  useHistory: jest.fn(() => mHistory),
}));

describe("Tags", () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it("should be pushed correct path", () => {
    const wrapper = mount(<Tags />);
    const backend = wrapper.find("#backend");
    backend.simulate("click");
    expect(mHistory.push).toBeCalledWith("/?category=backend");
  });
});

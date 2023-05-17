import { renderHook } from "@testing-library/react-hooks";
import * as Registered from "./actions";
import { useForgetPassword } from ".";

describe("useForgetPassword", () => {
  const { result } = renderHook(() => useForgetPassword());
  const IsValueAlreadyRegisteredMock = jest.fn();

  test("nextStep", async () => {
    jest
      .spyOn(Registered, "IsValueAlreadyRegistered")
      .mockReturnValue(IsValueAlreadyRegisteredMock)

    const { nextStep } = result.current;
    nextStep();

    expect(Registered.IsValueAlreadyRegistered).toBeCalledWith(
      "any@any.com",
      "isEmailRegistered"
    );
  });
})
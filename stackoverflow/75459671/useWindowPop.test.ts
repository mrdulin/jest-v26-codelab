import { fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useWindowPop } from "./useWindowPop";

describe('75459671', () => {
  test('should pass', () => {
    renderHook(useWindowPop);

    fireEvent(
      window,
      new window.PopStateEvent("popstate", {
        state: { page: 1 },
      })
    );
  });
})
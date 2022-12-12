import { render } from "@testing-library/react";
import React from "react";
import { Provider, useSelector } from "react-redux"
import { createStore } from "redux";

type RootState = {
  nutrition: {
    items: any[]
  }
};
export const MealsSummary = (): JSX.Element => {
  const { items } = useSelector((store: RootState) => store.nutrition);
  console.log('items: ', items);
  return <div />
}

describe("74765250", () => {
  test('should pass', () => {
    const store = createStore((state = { nutrition: { items: [1, 2, 3] } }) => state)
    render(<Provider store={store}><MealsSummary /></Provider>)
  })
})
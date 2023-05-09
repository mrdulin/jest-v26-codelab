import React from "react";
import { useEffect } from "react";

export const SomeComponent = ({ someEvent }) => {
  useEffect(() => {
    someEvent()
  }, [])

  return <div>some component</div>
}

export function SomeParentComponent() {
  const someExpression = 1;
  return <SomeComponent someEvent={() => someExpression ? true : false} />
}
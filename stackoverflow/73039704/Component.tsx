import React from 'react';
import { useContext } from 'react';
import { TestContext } from './TestContext';

export default function ComponentToBeTested() {
  const { stateVariable, setStateVariable } = useContext(TestContext)
  return (
    <>
      <h1>
        Current value: <span data-testid="answer">{stateVariable}</span>
      </h1>
      <button data-testid="increment-button" onClick={() => setStateVariable(stateVariable + 1)}>
        Increment
      </button>
    </>
  );
}

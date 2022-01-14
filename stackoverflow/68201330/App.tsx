import React from 'react';
import { useState } from 'react';

export function Click(props: { counter: number }) {
  const [counter, setCounter] = useState(props.counter);

  return (
    <header className="App-header">
      <h1 data-test="counter">{counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </header>
  );
}

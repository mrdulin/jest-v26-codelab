import React from 'react';

export default function Counter() {
  const [counter, setCouter] = React.useState(0);
  return (
    <div className="App">
      <h1>This is Counter App of me</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setCouter(counter + 1)}>
        Increment
      </button>
      <button id="decrement-btn" onClick={() => setCouter(counter > 0 ? counter - 1 : 0)}>
        Decrement
      </button>
    </div>
  );
}

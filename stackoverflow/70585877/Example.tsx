import React from 'react';
import { useState } from 'react';

export function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button id="count-up" onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}

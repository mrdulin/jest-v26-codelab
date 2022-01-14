import React, { useCallback } from 'react';
import FirstCounter from './FirstCounter';
import SecondCounter from './SecondCounter';

export function App() {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  const increment2 = useCallback(() => {
    setCount2((count2) => count2 + 1);
  }, []);

  return (
    <div>
      <div className="first">
        <FirstCounter count={count} onClick={increment} />
      </div>
      <div className="second">
        <SecondCounter count={count2} onClick={increment2} />
      </div>
    </div>
  );
}

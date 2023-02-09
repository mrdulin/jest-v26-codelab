import React from "react";
import { useState } from "react";

export const AwaitAsync = () => {
  const [data, setData] = useState('');
  const handleClick = () => {
    setTimeout(() => {
      setData('Data after 4 secons');
    }, 1000);
  };

  return (
    <div>
      <h2>Await Async</h2>
      <h4>Data will come after 4 secons</h4>
      <p>
        <button onClick={handleClick}>Click to display data</button>
      </p>
      {data && <p data-testid="abc">{data}</p>}
    </div>
  );
};

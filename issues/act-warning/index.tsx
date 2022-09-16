import React, { useEffect, useState } from 'react';

export const App = () => {
  const [data, setData] = useState();

  const getter = async () => {
    const res = await fetch('http://localhost:3000/api');
    setData(await res.json());
  };
  useEffect(() => {
    getter();
  }, []);

  return <div>{data}</div>;
};

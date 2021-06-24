import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

export const MyComp = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/my-url').then((res) => {
      setData(res.data.data);
    });
  }, []);

  return <div>{data && <div data-testid="data">{data}</div>}</div>;
};

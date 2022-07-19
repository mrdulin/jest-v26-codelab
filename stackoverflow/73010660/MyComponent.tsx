import axios, { CancelToken } from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const fetchName = (cancelToken: CancelToken) =>
  axios
    .get<string>('/user?id=123', { cancelToken })
    .then((res) => res.data);

export const MyComponent = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    const source = axios.CancelToken.source();
    const getName = async () => {
      const name = await fetchName(source.token);
      setName(name ? name : 'noName');
    };
    getName();

    return () => {
      source.cancel('axios request cancelled');
    };
  }, []);

  return <h1> Hello {name} </h1>;
};

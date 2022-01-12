import { useState } from 'react';

const useFetch = () => {
  const [toShow, setToShow] = useState(true);
  const dummyAPICall = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        setToShow(false);
      })
      .catch(() => {
        setToShow(true);
      });
  };
  return { toShow, setToShow, dummyAPICall };
};

export { useFetch };

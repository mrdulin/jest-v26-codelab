import React, { useState, useEffect } from 'react';

export function Component() {
  const [response, setResponse] = useState();
  const [fail, setFail] = useState();
  /**
   * @function getModels - fetch data to populate the models
   * */
  const fetchStuff = async () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((data) => {
        const storage = [data];
        setResponse(storage);
        setFail(false);
      })
      .catch((err) => {
        setResponse(err);
        setFail(true);
      });
  };

  useEffect(() => {
    fetchStuff();
  }, []);

  if (fail === true) {
    return (
      <p>
        ERROR:
        {fail}
      </p>
    );
  }
  if (fail === false) {
    return (
      <p>
        Success:
        {response}
      </p>
    );
  }
  return <p>Loading Screen</p>;
}

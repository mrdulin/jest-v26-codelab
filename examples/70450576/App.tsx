import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';

interface IJoke {
  category: string;
  joke: string;
}

export const App = () => {
  const [data, setData] = useState<IJoke | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then((res: AxiosResponse<IJoke>) => {
        setData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="info">
          <div className="info__cat">{data?.category ? `category: ${data.category}` : 'bad category'}</div>
          <div className="info__joke">{data?.joke ? `joke: ${data?.joke}` : 'bad data'}</div>
        </div>
      )}
    </div>
  );
};

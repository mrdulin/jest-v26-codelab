import { useEffect, useState } from 'react';

export const AAA = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    let result;
    try {
      result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await result.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return null;
};

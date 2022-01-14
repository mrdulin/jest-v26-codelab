import { useEffect, useState } from 'react';

export const useSum = (a = 1, b = 1) => {
  const [sum, setSum] = useState(a + b);

  useEffect(() => {
    setSum(a + b);
  }, [a, b]);

  return sum;
};

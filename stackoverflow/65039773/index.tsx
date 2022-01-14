import React from 'react';
import { useSum } from './useSum';

export const MyFuncComp = () => {
  const sum = useSum(1, 2);
  return <div>{sum}</div>;
};

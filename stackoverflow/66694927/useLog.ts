import { useCallback } from 'react';

export const useLog = () => {
  const log = useCallback(() => console.log('hello World'), []);
  return { log };
};

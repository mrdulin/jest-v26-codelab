import { useEffect } from 'react';

export const usePageTracking = (): void => {
  useEffect(() => {
    console.log(window.location.href);
  }, []);
};

import React from 'react';
import { useEffect, useState } from 'react';

export const RatingsAndReviews = (props) => {
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);

  console.log('pageLoaded: ', pageLoaded);
  const handleLoad = () => {
    if (document.readyState === 'complete') {
      setTimeout(() => {
        setPageLoaded(true);
      }, 1500);
    }
  };

  useEffect(() => {
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return <div>{pageLoaded ? 'loaded' : 'not loaded'}</div>;
};

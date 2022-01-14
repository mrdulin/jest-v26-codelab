import React from 'react';
import { useFetch } from './useFetch';

const FetchPost = () => {
  const { toShow, dummyAPICall } = useFetch();

  return toShow ? (
    <>
      <button onClick={dummyAPICall} data-testid="fetch-result">
        Fetch
      </button>
    </>
  ) : null;
};

export { FetchPost };

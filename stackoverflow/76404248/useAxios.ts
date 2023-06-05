import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const promiseWrapper = (promise: Promise<any>) => {
  let status = 'pending';
  let result: any;

  const suspender = promise.then(
    (value: any) => {
      status = 'success';
      result = value;
    },
    (error: any) => {
      status = 'error';
      result = error;
    }
  );

  return () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'success':
        return result.data;
      case 'error':
        throw result;
      default:
        throw new Error('Unknown status');
    }
  };
};

export const useAxios = <T,>(requestConfig: AxiosRequestConfig): T | null => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const doRequest = () => {
      const result = axios.request(requestConfig);
      setResponse(promiseWrapper(result));
    };
    doRequest();
  }, []);

  return response;
};
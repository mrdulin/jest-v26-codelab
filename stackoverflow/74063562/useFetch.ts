import { useState, useCallback } from 'react';
import axios from 'axios';

export const useFetch = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (url: string) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const data = response.data;
      setLoading(false);
      return data;
    } catch (error: any) {
      if (error.name !== 'AbortError') {
        setLoading(false);
        setError(error.message);
      }
    }
  }, []);

  return { error, loading, fetchData };
};

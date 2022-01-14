import { useEffect, useState } from 'react';
import { getChatLog } from './getChatLog';

export function useService() {
  const [data, setData] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState({});
  const [cancelRequest, setCancelRequest] = useState(false);

  const getMessgaes = async () => {
    setLoading(true);
    try {
      const res = await getChatLog();
      if (!cancelRequest) {
        setData(res);
        setLoading(false);
      }
    } catch (e) {
      if (!cancelRequest) {
        setError(e);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getMessgaes();
  }, []);

  return { data, error, loading, cancelRequest };
}

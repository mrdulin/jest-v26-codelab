import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function useCustomHook() {
  const { query } = useRouter();
  const [state, setState] = useState({});

  useEffect(() => {
    console.count('effect');
    setState({ id: query.id });
  }, [query]);

  return state;
}

import qs from 'qs';
import { useMemo } from 'react';
import { useLocation } from 'react-router';
import { useApiQuery } from './useApiQuery';

type AnyObject = Record<string, any>;

export const api = {
  async getUser(id) {
    return { name: 'real user name' };
  },
};

function useQuery<ParsedQS extends AnyObject>(): ParsedQS {
  const { search } = useLocation();
  return useMemo(() => {
    return (qs.parse(search, { ignoreQueryPrefix: true }) as unknown) as ParsedQS;
  }, [search]);
}

export function useUser() {
  const query = useQuery();
  const { value, status } = useApiQuery(api.getUser, { params: [query.id] });
  return value;
}

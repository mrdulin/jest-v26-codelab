import { useState, useCallback, useEffect } from 'react';

export type AsyncFn = (...args: any[]) => Promise<any>;
export type PromiseValue<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

export type UseAsyncResponseStatus = 'idle' | 'pending' | 'success' | 'error';

export interface UseAsyncResponse<Api extends AsyncFn = AsyncFn> {
  execute(params: Parameters<Api>): Promise<void>;
  value: PromiseValue<ReturnType<Api>> | null;
  status: UseAsyncResponseStatus;
  error: Error | null;
}
interface UseApiQueryOpts<Api extends AsyncFn> {
  immediate?: boolean;
  params: Parameters<Api>;
}
export function useApiQuery<Api extends AsyncFn>(
  api: Api,
  options: UseApiQueryOpts<Api> = { immediate: true, params: ([] as unknown) as Parameters<Api> }
): UseAsyncResponse<Api> {
  const { immediate = true, params } = options;
  const [status, setStatus] = useState<UseAsyncResponseStatus>('idle');
  const [value, setValue] = useState<PromiseValue<ReturnType<Api>> | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async (): Promise<void> => {
    setStatus('pending');
    return api(...params)
      .then((response) => {
        setValue(response);
        setStatus('success');
      })
      .catch((err) => {
        setError(err);
        setStatus('error');
      });
  }, [JSON.stringify(params)]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
}

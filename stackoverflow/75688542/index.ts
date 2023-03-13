export function timeout<T>(promise: Promise<T>, millis: number, contextName?: string): Promise<T> {
  let contextPrefix = 'Request';
  if (contextName) {
    contextPrefix = contextName;
  }
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      reject(new Error(`${contextPrefix} timed out.`));
    }, millis);

    promise
      .then((response: T) => {
        if (timer) {
          clearTimeout(timer);
          resolve(response);
        }
      })
      .catch((err) => {
        const msg = (err as Error).message || (err as string);
        if (timer) {
          clearTimeout(timer);
          reject(err instanceof Error ? err : new Error(msg));
        }
      });
  });
}

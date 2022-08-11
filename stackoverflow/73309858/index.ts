export const submitform = async (url: string, file: File, params: Record<string, any>) => {
  const body = new FormData();
  body.append('file', file);

  if (Object.keys(params).length > 0) {
    Object.keys(params).forEach((key) => {
      body.append(key, params[key]);
    });
  }

  const res = await fetch(url, {
    method: 'post',
    headers: {
      authorization: `Bearer ${'abc'}`,
    },
    body,
  });
  return res.json();
};

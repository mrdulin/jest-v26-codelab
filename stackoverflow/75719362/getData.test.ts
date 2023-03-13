import getRedirectUrl from './getRedirectUrl';

describe('getRedirectUrl', () => {
  const mockUrl = '/foo/path/6486867645846';

  it('should create the redirect url', async () => {
    process.env.ENDPOINT = 'http://localhost:8080/graphql';

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({
          data: {
            page: {
              content: {
                type: 'MyPage',
                id: 'e523f6f6-6e73-4bb0-8737-95b63e1f9e6c',
              },
            },
          },
        }),
    });
    const actual = await getRedirectUrl(mockUrl);
    expect(actual).toBe('/my-page/?id=e523f6f6-6e73-4bb0-8737-95b63e1f9e6c');
  });
});

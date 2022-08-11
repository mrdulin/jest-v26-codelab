import { submitform } from '.';

describe('73309858', () => {
  test('should pass', async () => {
    expect.assertions(3);
    const mResponse = { json: jest.fn().mockResolvedValue({}) };
    const mFetch: jest.MockedFunction<typeof fetch> = jest.fn().mockReturnValueOnce(mResponse);
    global.fetch = mFetch;
    const myParams = { a: 'a', b: 'b' };
    const postUrl = '/url';
    const file = new File(['a'], 'avatar');
    await submitform(postUrl, file, myParams);
    expect(mFetch).toHaveBeenCalledTimes(1);
    expect(mFetch).toHaveBeenCalledWith(
      '/url',
      expect.objectContaining({
        method: 'post',
        headers: {
          authorization: `Bearer ${'abc'}`,
        },
        body: expect.any(FormData),
      })
    );
    const callArgs = mFetch.mock.calls[0][1];
    if (callArgs) {
      const body = callArgs.body as FormData;
      const formData = Array.from(body.entries()).reduce(
        (acc, f) => ({ ...acc, [f[0]]: f[1] }),
        {} as Record<string, any>
      );
      expect(formData).toMatchObject(myParams);
    }
  });
});

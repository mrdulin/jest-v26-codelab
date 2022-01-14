import { RedisSession } from './';

describe('67220364', () => {
  it('should create redis connection', async () => {
    const mRs = {
      create: jest.fn().mockImplementationOnce((option, callback) => {
        callback(null, { token: '123' });
      }),
    };
    const getRedisConnectionSpy = jest.spyOn(RedisSession, 'getRedisConnection').mockReturnValueOnce(mRs);
    const actual = await RedisSession.createSession('teresa teng', '1');
    expect(actual).toEqual('123');
    expect(getRedisConnectionSpy).toBeCalledTimes(1);
    expect(mRs.create).toBeCalledWith(
      {
        app: 'test',
        id: '1',
        ip: 'NA',
        ttl: 3600,
        d: {
          data: 'teresa teng',
        },
      },
      expect.any(Function)
    );
  });
});

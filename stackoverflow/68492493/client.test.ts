// @ts-nocheck
import { getCacheClient } from './client';
import redis from 'redis';

describe('68492493', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should create redis client and be ready', async () => {
    const config = {
      host: 'testrediscachehost',
      port: 1234,
      key: 'testrediscachekey',
    };
    const mRedisClient = {
      on: jest.fn().mockImplementation(function (event, handler) {
        if (event === 'ready') {
          handler();
        }
        return this;
      }),
      quit: jest.fn(),
    };
    const createClientSpy = jest.spyOn(redis, 'createClient').mockReturnValueOnce(mRedisClient);
    await getCacheClient(config);
    expect(createClientSpy).toBeCalledWith(1234, 'testrediscachehost');
    expect(mRedisClient.on).toBeCalledWith('ready', expect.any(Function));
  });

  test('should handle error', async () => {
    // Try test by yourself
  });
});

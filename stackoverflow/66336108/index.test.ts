import redis from 'redis-mock';

describe('test', () => {
  it('should do sth', (done) => {
    const redisClient = redis.createClient();
    redisClient.set('key', 'myKeyValue', () => {
      redisClient.get('key', (err, redisValue) => {
        console.log(redisValue);
        expect(redisValue).toBe('myKeyValue');
        done();
      });
    });
  });
});

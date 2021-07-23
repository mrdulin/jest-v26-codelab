import redis from 'redis';

export const getCacheClient = async (configuration) => {
  return new Promise((resolve, reject) => {
    const redisClient = redis.createClient(configuration.port, configuration.host);
    redisClient.on('ready', () => resolve(redisClient));
    redisClient.on('error', (redisError) => {
      console.log('Error connecting Redis', redisError.message);
      redisClient.quit();
      return reject(redisError);
    });
  });
};

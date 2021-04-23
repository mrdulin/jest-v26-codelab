import RedisSessions from 'redis-sessions';

interface Uuid {}

export class RedisSession {
  static async createSession(userData: string, userId: Uuid, ipAddress: string = 'NA'): Promise<string> {
    const rs = this.getRedisConnection();
    return new Promise<string>((resolve, reject): void => {
      rs.create(
        {
          app: 'test',
          id: userId,
          ip: ipAddress,
          ttl: 3600,
          d: {
            data: userData,
          },
        },
        (err: object, resp: { token: string }): void => {
          if (resp !== undefined && resp.token.length > 0) {
            return resolve(resp.token);
          }

          if (err != null) {
            reject(err);
          }
        }
      );
    });
  }

  static getRedisConnection() {
    return new RedisSessions({ host: '127.0.0.1', port: '6379', namespace: 'rs' });
  }
}

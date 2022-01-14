import client from './client';

interface IRequest {
  make(req: Request): Promise<Response>;
}

export default class DefaultRequest implements IRequest {
  make(req: Request): Promise<Response> {
    return new Promise<Response>((resolve, reject) => {
      client.post(req, (error: Error | null, res: Response) => {
        if (error) {
          return reject(error);
        } else {
          return resolve(res);
        }
      });
    });
  }
}

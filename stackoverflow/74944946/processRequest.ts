import { NextFunction, Response, Request } from 'express';
import { example } from './someplace';

const processRequest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log('in route handler');
    const foo = await example(req.body.someData);
    console.log('foo: ', foo);
    res.status(200).send();
  } catch (e) {
    next(e);
  }
};
export { processRequest };

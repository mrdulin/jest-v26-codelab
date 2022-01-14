import Express from 'express';
import { add_rec } from './utils';

export const create_rec = () => async (req: Express.Request, res: Express.Response) => {
  const rec_body = req.body.rec;

  return add_rec(rec_body)
    .then((ret) => res.status(201).send(ret))
    .catch((e) => {
      res.status(500).send({ message: e.message });
    });
};

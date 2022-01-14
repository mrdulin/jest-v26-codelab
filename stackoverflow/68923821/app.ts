import express from 'express';
import { ErrorRequestHandler } from 'express-serve-static-core';

export const createApp = (underlyingFunction) => {
  const app = express();

  app.get('/my-endpoint', async (req, res, next) => {
    try {
      await underlyingFunction();
      res.send({ success: true });
    } catch (error) {
      next(error);
    }
  });

  const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    console.error('Unhandled exception');
    res.status(500).send({ message: 'Oh dear' });
  };

  app.use(errorHandler);
  return app;
};

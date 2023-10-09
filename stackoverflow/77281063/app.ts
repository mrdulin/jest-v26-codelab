import express, { Application, Request, Response } from 'express';
import authMiddleware from './AuthMiddleware';

const app: Application = express();

app.disable('x-powered-by');

const rootHandler = (request: Request, response: Response) => {
	response.json({ status: 'online' });
};

app.get('/', [authMiddleware.verifyAuthenticated, rootHandler]);

export default app;

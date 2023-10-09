import request from 'supertest';
// import app from './app';
import authMiddleware from './AuthMiddleware';
import { NextFunction, Request, Response } from 'express';

describe('GET /', () => {
	test('Should return online.', async () => {
		jest
			.spyOn(authMiddleware, 'verifyAuthenticated')
			.mockImplementation((req: Request, res: Response, next: NextFunction) => {
				console.log('This is the mock deal');
				next();
			});

		const app = (await import('./app')).default;
		const agent = request(app);
		const response = await agent.get('/').send();

		expect(response.statusCode).toBe(200);
		expect(response.headers['content-type']).toContain('application/json');
		expect(response.body.status).toBe('online');
	});
});

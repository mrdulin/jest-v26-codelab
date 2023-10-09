import { Request, Response, NextFunction } from 'express';

class AuthMiddleware {
	constructor() {
		console.log('AuthMiddleware instance created');
	}

	verifyAuthenticated = (request: Request, response: Response, next: NextFunction) => {
		console.log('This is the real deal');
		next();
	};
}

export default new AuthMiddleware();

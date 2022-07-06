import { errorHandler } from './errorHandler';
import express from 'express';

describe('errorHandler', () => {
  test('should send error', () => {
    const mw = errorHandler();
    class CustomError extends Error {
      constructor(public type: string, message?: string) {
        super(message);
        this.stack = new Error().stack;
        this.name = this.constructor.name;
      }
    }
    const mError = new CustomError('entity.too.large', 'test error message');
    const mRes = ({
      headersSent: false,
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown) as express.Response;
    const mNext = jest.fn() as express.NextFunction;
    const mReq = {} as express.Request;
    mw(mError, mReq, mRes, mNext);
    expect(mRes.status).toBeCalledWith(500);
    expect(mRes.json).toBeCalledWith({ success: false, errorCode: 'sys_entity_too_large' });
    expect(mNext).toBeCalledTimes(1);
  });
});

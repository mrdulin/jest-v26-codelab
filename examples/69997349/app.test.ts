import request from 'supertest';
import multer from 'multer';
import { MaybeMocked } from 'ts-jest/dist/utils/testing';
import { NextFunction, Request, Response } from 'express';

describe('69997349', () => {
  let app: typeof import('./app').app;
  beforeEach(async () => {
    jest.resetModules();
  });
  it('should return 201', async () => {
    const mockFile = { fieldname: 'myImage' } as Express.Multer.File;
    jest.doMock('multer', () => {
      const m = () => ({
        single: () => (req: Request, res: Response, next: NextFunction) => {
          req.body = { type: 'screenshots' };
          req.file = mockFile;
          return next();
        },
      });
      return m;
    });
    app = (await import('./app')).app;
    await request(app).post('/api/v1/garment/image/upload').send({ file: 'myImage' }).expect(201);
  });

  it('should return 400', async () => {
    jest.doMock('multer', () => {
      const m = () => ({
        single: () => (req: Request, res: Response, next: NextFunction) => {
          return next();
        },
      });
      return m;
    });
    app = (await import('./app')).app;
    await request(app).post('/api/v1/garment/image/upload').expect(400);
  });
});

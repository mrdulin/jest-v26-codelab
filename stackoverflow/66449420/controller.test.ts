import { GetCountriesList } from './controller';
import * as Services from './services';
import { mocked } from 'ts-jest/utils';
import type { Request, Response } from 'express';

jest.mock('./services');

describe('GetCountriesList', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should pass', async () => {
    mocked(Services.GetCountriesList).mockResolvedValueOnce({
      code: 400,
      status: 400,
      message: 'fake message',
      count: 0,
      data: 'fake data',
    });
    const mReq = ({} as unknown) as Request;
    const mRes = ({ status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown) as Response;
    await GetCountriesList(mReq, mRes);
    expect(mRes.status).toBeCalledWith(400);
    expect(mRes.json).toBeCalledWith({ status: 400, message: 'fake message', count: 0, data: 'fake data' });
  });
});

import Express from 'express';
import { create_rec } from './methods';
import { add_rec } from './utils';

jest.mock('./utils');

describe('68419899', () => {
  test('should pass', async () => {
    (add_rec as jest.MockedFunction<any>).mockResolvedValueOnce({});
    const req = ({ body: { rec: {} } } as unknown) as Express.Request;
    const res = ({ status: jest.fn().mockReturnThis(), send: jest.fn() } as unknown) as Express.Response;
    await create_rec()(req, res);
    expect(add_rec).toBeCalledWith({});
    expect(res.status).toBeCalledWith(201);
    expect(res.send).toBeCalledWith({});
  });
});

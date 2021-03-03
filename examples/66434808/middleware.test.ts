import { NextFunction } from 'express';
import { fAP } from './middleware';
import { mocked } from 'ts-jest/utils';
import Ph from './Ph.model';

jest.mock('./Ph.model', () => {
  return {
    aggregate: jest.fn().mockReturnThis(),
    exec: jest.fn(),
  };
});

describe('66434808', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should call next when matches', () => {
    const responseData = [{ pN: '2222' }];
    mocked(Ph.aggregate().exec).mockImplementationOnce((callback) => {
      callback!(null, responseData);
    });
    const mockRequest: any = { body: { pN: '3028' } };
    const mockResponse: any = { json: jest.fn() };
    const mockNext: NextFunction = jest.fn();
    fAP(mockRequest, mockResponse, mockNext);
    expect(Ph.aggregate).toBeCalledWith([
      { $match: { polNum: { $eq: '3028' } } },
      {
        $match: {
          $expr: {
            $and: [{ $eq: ['$pCS', 'A'] }],
          },
        },
      },
    ]);
    expect(Ph.aggregate().exec).toBeCalledWith(expect.any(Function));
    expect(mockNext).toBeCalledTimes(1);
  });
});

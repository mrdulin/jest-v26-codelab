import { main } from './';
import AWS from 'aws-sdk';

jest.mock('aws-sdk', () => {
  const SQSMocked = {
    changeMessageVisibility: jest.fn(),
  };
  const configMocked = {
    update: jest.fn().mockReturnThis(),
  };
  return {
    SQS: jest.fn(() => SQSMocked),
    config: configMocked,
  };
});

describe('72634741', () => {
  test('should pass', () => {
    const sqsMock = new AWS.SQS();
    const errMock = new Error('fake error');
    const logSpy = jest.spyOn(console, 'log');
    sqsMock.changeMessageVisibility.mockImplementationOnce((params, callback) => {
      callback(errMock);
    });
    main();
    expect(logSpy).toBeCalledWith(errMock, errMock.stack);
  });
});

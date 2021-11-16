import { randomMethod } from '.';
import SM from 'aws-sdk/clients/secretsmanager';
import { mocked } from 'ts-jest/utils';
import { PromiseResult } from 'aws-sdk/lib/request';

jest.mock('aws-sdk/clients/secretsmanager', () => {
  const mSecretManagerClient = {
    getSecretValue: jest.fn().mockReturnThis(),
    promise: jest.fn(),
  };
  return jest.fn(() => mSecretManagerClient);
});

describe('69977310', () => {
  test('should get secret value', async () => {
    process.env.secretId = 's1';
    const mSecretManagerClient = mocked<InstanceType<typeof SM>>(new SM());
    const mGetSecretValueRequest = mocked(mSecretManagerClient.getSecretValue());

    mGetSecretValueRequest.promise.mockResolvedValue({
      SecretString: JSON.stringify({ password: '123456' }),
    } as PromiseResult<any, any>);
    const actual = await randomMethod();
    expect(actual).toEqual(JSON.stringify({ password: '123456' }));
    expect(mSecretManagerClient.getSecretValue as jest.Mocked<any>).toBeCalledWith({ SecretId: 's1' });
  });

  test('should throw error', async () => {
    process.env.secretId = 's1';
    const logSpy = jest.spyOn(console, 'error').mockImplementation(() => 'suppress error log for testing');
    const mSecretManagerClient = mocked<InstanceType<typeof SM>>(new SM());
    const mGetSecretValueRequest = mocked(mSecretManagerClient.getSecretValue());

    const mError = new Error('network');
    mGetSecretValueRequest.promise.mockRejectedValue(mError);
    await randomMethod();
    expect(logSpy).toBeCalledWith(`[SECRETS MANAGER] Error fetching personal token : ${mError}`);
    expect(mSecretManagerClient.getSecretValue as jest.Mocked<any>).toBeCalledWith({ SecretId: 's1' });
  });
});

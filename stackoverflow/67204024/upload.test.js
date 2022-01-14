import { uploadToS3 } from './upload';
import AWS from 'aws-sdk';

jest.mock('aws-sdk', () => {
  const mockedS3 = {
    upload: jest.fn().mockReturnThis(),
    promise: jest.fn(),
  };
  return { S3: jest.fn(() => mockedS3) };
});

describe('uploadToS3', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should upload file to s3', async () => {
    const mockedS3 = new AWS.S3();
    const logSpy = jest.spyOn(console, 'log');
    mockedS3.promise.mockResolvedValueOnce({ Location: 'us' });
    const body = 'test|data';
    const bucket = 'testBucket';
    const key = 'testKey';
    await uploadToS3(body, bucket, key);
    expect(mockedS3.upload).toBeCalledWith({ Body: body, Bucket: bucket, Key: key });
    expect(mockedS3.promise).toBeCalledTimes(1);
    expect(logSpy).toBeCalledWith('Successfully uploaded data to us');
  });

  it('should handle error when upload file to s3 failed', async () => {
    const mockedS3 = new AWS.S3();
    const errorLogSpy = jest.spyOn(console, 'error');
    const mError = new Error('network');
    mockedS3.promise.mockRejectedValueOnce(mError);
    const body = 'test|data';
    const bucket = 'testBucket';
    const key = 'testKey';
    await uploadToS3(body, bucket, key);
    expect(mockedS3.upload).toBeCalledWith({ Body: body, Bucket: bucket, Key: key });
    expect(mockedS3.promise).toBeCalledTimes(1);
    expect(errorLogSpy).toBeCalledWith(mError);
  });
});

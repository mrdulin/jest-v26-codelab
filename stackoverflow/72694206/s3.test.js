const s3Handler = require('./s3');
const AWS = require('aws-sdk');

jest.mock('aws-sdk', () => {
  const mockS3 = { getObject: jest.fn() };
  return {
    config: {
      update() {
        return {};
      },
    },
    S3: jest.fn(() => mockS3),
  };
});

describe('S3 get object test', () => {
  let mockS3;
  beforeAll(() => {
    mockS3 = new AWS.S3();
  });
  test('should get object', async () => {
    mockS3.getObject.mockImplementation((params, callback) => {
      callback(null, 's3file.js');
    });
    const output = s3Handler.getS3Object('test-bucket', 'test-key');
    await expect(output).resolves.toEqual('s3file.js');
  });

  test('should handle error', async () => {
    const mError = new Error('fake error');
    mockS3.getObject.mockImplementation((params, callback) => {
      callback(mError);
    });
    const output = s3Handler.getS3Object('test-bucket', 'test-key');
    await expect(output).rejects.toThrow(mError);
  });
});

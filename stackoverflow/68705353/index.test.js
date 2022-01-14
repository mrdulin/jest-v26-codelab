const createPresignedPost = require('./');

const mockedCreatePresignedPost = jest.fn();

jest.mock('aws-sdk', () => {
  return {
    S3: jest.fn(() => ({
      createPresignedPost: mockedCreatePresignedPost,
    })),
    config: {
      update: jest.fn(),
    },
  };
});

describe('68705353', () => {
  it('has to mock S3#createPresignedPost', async () => {
    mockedCreatePresignedPost.mockImplementation((params, callback) => {
      callback(null, 'mocked data');
    });
    process.env.AWS_BUCKET_NAME = 'test1';
    const params = {
      key: 'test2',
      contentType: 'application/json',
    };
    const s3params = {
      Bucket: 'test1',
      Conditions: [['content-length-range', 100, 10000000]],
      Expires: 60,
      Fields: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'max-age=31536000',
        'Content-Type': params['contentType'],
        key: params['key'],
      },
    };
    const actual = await createPresignedPost(params);
    expect(actual).toEqual('mocked data');
    expect(mockedCreatePresignedPost).toHaveBeenCalledWith(s3params, expect.any(Function));
  });

  it('should handle error', async () => {
    mockedCreatePresignedPost.mockImplementation((params, callback) => {
      callback(new Error('network'));
    });
    process.env.AWS_BUCKET_NAME = 'test1';
    const params = {
      key: 'test2',
      contentType: 'application/json',
    };
    const s3params = {
      Bucket: 'test1',
      Conditions: [['content-length-range', 100, 10000000]],
      Expires: 60,
      Fields: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'max-age=31536000',
        'Content-Type': params['contentType'],
        key: params['key'],
      },
    };
    await expect(createPresignedPost(params)).rejects.toThrowError('network');
    expect(mockedCreatePresignedPost).toHaveBeenCalledWith(s3params, expect.any(Function));
  });
});

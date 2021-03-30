import DynamoDBContentAccess from './dynamodb_content_access';

const AWS = require('aws-sdk');

describe('services', () => {
  it('returns a list of services', async () => {
    const params = {
      bearerToken: 'fake bearer token',
      filter: {},
      skip: 10,
      limit: 10,
    };
    const mockResponse = {
      Responses: {
        Services: [
          {
            ServiceId: {
              S: 'example1',
            },
          },
        ],
      },
    };

    const dynamodb = {
      batchGetItem: jest.fn().mockReturnThis(),
      promise: jest.fn().mockResolvedValueOnce(mockResponse),
    };
    const DynamoDBSpy = jest.spyOn(AWS, 'DynamoDB').mockImplementation(() => dynamodb);
    let serviceInterface = new DynamoDBContentAccess();

    const result = await serviceInterface.findServices(params);
    expect(result).toEqual(mockResponse);
    expect(DynamoDBSpy).toBeCalledTimes(1);
    expect(dynamodb.batchGetItem).toBeCalledWith({ TableName: 'Services' });
    expect(dynamodb.promise).toBeCalledTimes(1);
  });
});

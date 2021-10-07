import { handler } from './handler';
import { DynamoDB } from 'aws-sdk';

const mDocumentClientInstance = {
  query: jest.fn().mockReturnThis(),
  promise: jest.fn(),
};
jest.mock('aws-sdk', () => {
  return {
    DynamoDB: {
      DocumentClient: jest.fn(() => mDocumentClientInstance),
    },
  };
});

describe('69475890', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should pass', async () => {
    mDocumentClientInstance.promise.mockResolvedValueOnce({});
    const event = {};
    const actual = await handler(event);
    expect(actual).toEqual({ statusCode: 200, body: JSON.stringify({}) });
    expect(DynamoDB.DocumentClient).toBeCalled();
    expect(mDocumentClientInstance.query).toBeCalledWith({
      TableName: 'tableName',
      IndexName: 'tableIndex',
      KeyConditionExpression: 'id= :id',
      ExpressionAttributeValues: {
        ':id': '123',
      },
    });
    expect(mDocumentClientInstance.promise).toBeCalled();
  });
});

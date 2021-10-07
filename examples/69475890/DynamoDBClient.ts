import { DynamoDB } from 'aws-sdk';

function getConfig() {
  return { mockDynamoDBEndpoint: '' };
}
interface Config {
  mockDynamoDBEndpoint: string;
}

export default class DynamoDBClient {
  private config: Config;
  private client: DynamoDB.DocumentClient;

  constructor() {
    this.config = getConfig();

    const dynamoDBClientConfig = this.config.mockDynamoDBEndpoint
      ? {
          endpoint: this.config.mockDynamoDBEndpoint,
          sslEnabled: false,
          region: 'local',
        }
      : undefined;

    this.client = new DynamoDB.DocumentClient(dynamoDBClientConfig);
  }

  getData = async (id: string): Promise<any> => {
    const response = await this.client
      .query({
        TableName: 'tableName',
        IndexName: 'tableIndex',
        KeyConditionExpression: 'id= :id',
        ExpressionAttributeValues: {
          ':id': id,
        },
      })
      .promise();
    return response;
  };
}

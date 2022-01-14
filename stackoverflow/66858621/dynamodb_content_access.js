const AWS = require('aws-sdk');

class DynamoDBContentAccess {
  constructor() {
    this.dynamodb = new AWS.DynamoDB();
  }
  async findServices(bearerToken, filter, skip, limit) {
    const params = {
      TableName: 'Services',
    };
    const results = await this.dynamodb.batchGetItem(params).promise();
    return results;
  }
}

export default DynamoDBContentAccess;

import DynamoDBClient from './DynamoDBClient';

interface APIGatewayProxyEvent {}
interface APIGatewayProxyResult {}

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  let respData = await new DynamoDBClient().getData('123');
  return { statusCode: 200, body: JSON.stringify(respData) };
};

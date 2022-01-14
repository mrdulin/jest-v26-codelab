import axios from 'axios';

interface APIGatewayProxyEvent {}
interface APIGatewayProxyResult {}

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      authorization: 'Token',
    },
  };
  const respData = await axios
    .all([
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5', options),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5', options),
    ])
    .then(axios.spread((todos, posts) => ({ todos, posts })))
    .catch((err) => console.error(err));

  return { statusCode: 200, body: JSON.stringify(respData) };
};

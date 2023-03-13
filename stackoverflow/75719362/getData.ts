import GET_DATA from './getData.gql';

const getData = async (targetUrl: string) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: GET_DATA,
      variables: {
        targetUrl,
      },
    }),
  };

  if (!process.env.ENDPOINT) throw new Error('ENDPOINT environment variable is not set');

  const response = await fetch(process.env.ENDPOINT, options);

  if (!response.ok) {
    throw new Error('Unable to parse json response');
  }

  const result = await response.json();

  if (result.errors?.length) {
    throw new Error('Something went wrong');
  }
  return result.data.page;
};

export default getData;

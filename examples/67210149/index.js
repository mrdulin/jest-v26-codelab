import { post } from 'request';

export function functionToFetch(uriFetching) {
  const json = {};

  post({ url: uriFetching, headers: {}, json }, (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      console.log(response);
    }
  });
}

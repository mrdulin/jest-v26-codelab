import axios from 'axios';

const createRequest = async (url, method) => {
  const response = await axios({
    url: url,
    method: method,
  });
  return response;
};

export default { createRequest };

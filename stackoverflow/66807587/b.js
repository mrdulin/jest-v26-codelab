const axios = require('axios');

const bar = async () => {
  const response = await axios.get('https://exampleurl.com');
  return response;
};

export default bar;

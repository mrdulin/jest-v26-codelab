const axios = require("axios");

const createApiInstance = (params) => axios.create();

module.exports = {
  createApiInstance,
};

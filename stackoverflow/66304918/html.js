const axios = require('axios');
const cheerio = require('cheerio');

const getHtml = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

const cheerioInit = async (url) => cheerio.load(await getHtml(url));

module.exports = {
  cheerioInit,
  getHtml,
};

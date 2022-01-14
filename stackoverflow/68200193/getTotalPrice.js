const axios = require('axios');

let symbol = process.argv[2];
let quantity = process.argv[3];

const API = `https://rest.coinapi.io/v1/exchangerate`;
const headers = { headers: { 'X-CoinAPI-Key': 'MY TOKEN' } };

const getTotalPrice = async (symbol = 'BTC', quantity = 1) => {
  try {
    let res = await axios.get(`${API}/${symbol}/USD`, headers);
    let data = res.data;
    return Math.round(data.rate * quantity * 100) / 100;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getTotalPrice, API };

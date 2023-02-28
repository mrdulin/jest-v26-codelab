import axios from "axios";

export const fetchRate = async (symbol = 'BTC') => {
  try {
    const response = await axios.get(`https://rest.coinapi.io/v1/exchangerate/${symbol}/USD`);
    return response;
  } catch (e) {
    throw e.response.data.error;
  }
};

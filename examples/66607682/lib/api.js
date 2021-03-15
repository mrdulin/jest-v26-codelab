import axios from 'axios';

export const getPages = async (a, b) => {
  let resp;
  try {
    resp = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/pages`);
  } catch (err) {
    throw new Error(err);
  }

  if (resp?.data?.urls) {
    return resp.data.urls;
  } else {
    throw new Error('Unable to fetch Urls');
  }
};

import axios from "axios";

async function fetchBirdImg(name) {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos?per_page=1&orientation=portrait",
    {
      headers: {
        Authorization: "auth key",
      },
      params: { query: `${name}` },
    }
  );
  return response.data.results;
}

export { fetchBirdImg };
const BASE_URL = 'https://swapi.co/api/';

export async function baseFetch(url, options = {}) {
  const response = await fetch(url, options);
  return await response.json();
}

export const getStarWars = async (path) => baseFetch(BASE_URL + path);

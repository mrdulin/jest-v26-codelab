export const FAVORITES_QUERY = `
  query Favorites {
    favorites
  }
`;

export async function fetchFavorites() {
  return fetch("http://whatever.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: FAVORITES_QUERY })
  })
    .then((resp) => resp.json())
    .then((result) => {
      return result.data && result.data.favorites ? result.data.favorites : [];
    })
    .catch((err) => {
      return undefined;
    });
}
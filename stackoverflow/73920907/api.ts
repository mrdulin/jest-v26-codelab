import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_SERVER}/api/`,
  timeout: 30000,
});

export async function getRecipes(userId: string, id?: string) {
  try {
    const response = await api({
      method: 'get',
      url: `users/${userId}/recipes/${id}`,
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}

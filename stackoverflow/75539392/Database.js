import axios from 'axios';

export async function getItems() {
  try {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    return data;
  } catch (error) {
    console.log('Error! D:', error);
  }
}

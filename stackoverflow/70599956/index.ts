import axios from 'axios';

interface Product {
  id: string;
}

export function main() {
  const productIds = ['SKU-1', 'SKU-2'];
  const promises = productIds.map<Promise<Product>>((id) => axios.get(`/products/${id}`));
  return Promise.all(promises);
}

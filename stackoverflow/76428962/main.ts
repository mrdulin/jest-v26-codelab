import axios from 'axios';

export function main() {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1');
}
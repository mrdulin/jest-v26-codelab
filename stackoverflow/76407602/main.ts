import axios from 'axios';

const url = 'http://localhost:3000';
export async function main() {
  const res1 = await axios.post(`${url}/API1`, {
    data: 'data for API1',
  });
  console.log('res1: ', res1);
  const res2 = await axios({
    method: 'POST',
    url: `${url}/API2`,
    data: {
      data: 'data for API2',
    },
  });
  console.log('res2: ', res2);
}

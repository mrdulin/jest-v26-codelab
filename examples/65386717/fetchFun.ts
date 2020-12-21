const fetch = require('node-fetch');

async function fetchFun(endPointurl, options) {
  try {
    const response = await fetch(endPointurl, options);
    if (!response.ok) {
      throw response.json();
    }
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('text/html')) {
      return await response.text();
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}
export default fetchFun;

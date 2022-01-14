import axios from 'axios';

let myCancelToken;
export async function myTestFuncService(name) {
  if (myCancelToken) {
    myCancelToken.cancel();
  }
  myCancelToken = axios.CancelToken.source();
  try {
    return await axios.get(`mypath/${name}`, {
      cancelToken: myCancelToken.token,
    });
  } catch (e) {
    return e;
  }
}

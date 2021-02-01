import url from 'url';
import jayson from 'jayson/promise';

export async function dispatch(webHook, method, payload) {
  const service = jayson.Client.https({ ...url.parse(webHook) });

  return service.request(method, { ...payload });
}

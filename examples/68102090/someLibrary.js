export function getUserContext(callback) {
  var context = {
    userName: 'TestUser',
    locale: 'en-us',
  };
  callback(context);
}

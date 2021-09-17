console.log('style mock');
module.exports = new Proxy(
  {},
  {
    get: function getter(target, key) {
      console.log('key: ', key);
      if (key === '__esModule') {
        return false;
      }
      return key;
    },
  }
);

const MyConnection = require('./MyConnection');

async function main(q) {
  const conn = MyConnection();
  return conn.search(q);
}

module.exports = main;

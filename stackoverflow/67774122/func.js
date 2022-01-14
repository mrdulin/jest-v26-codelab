const util = require('util');

async function fun(conn, input) {
  const connection = conn.getConnection();
  const processed_input = 'processed ' + input;
  const x = util.promisify(connection.query).bind(connection);
  return x(processed_input);
}

module.exports = fun;

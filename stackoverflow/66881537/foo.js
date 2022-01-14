const Knex = require('knex');

module.exports = { func };

const client = Knex();

async function func() {
  console.log(client);
  return true;
}

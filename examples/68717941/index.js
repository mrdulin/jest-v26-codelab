import Knex from 'knex';

const knex = Knex({ client: 'mysql' });

export function main() {
  const query = knex('table_name')
    .where({
      title: 'xxx-yyy',
      lang: 'eng',
    })
    .select()
    .orderBy('date', 'desc')
    .toSQL()
    .toNative();
}

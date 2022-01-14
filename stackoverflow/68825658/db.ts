import * as mysql from 'mysql';
import * as util from 'util';

const DB_CONFIG = {};

const getDbConnection = () => {
  const pool = mysql.createPool(DB_CONFIG);
  return {
    query(sql: string) {
      return util.promisify(pool.query).call(pool, sql);
    },
  };
};
export default getDbConnection;

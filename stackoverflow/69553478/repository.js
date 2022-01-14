// simulate sequelieze
const sequelize = {};
const initModels = require('./init-models');

let { records } = initModels(sequelize);

const fetchRecords = async () => {
  console.info('Fetching records...');
  return await records.findAll({});
};

module.exports = { fetchRecords };

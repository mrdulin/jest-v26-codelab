const csv = require('csvtojson');

async function main() {
  const csvFilePath = './test.csv';
  const csvJsonArray = await csv().fromFile(csvFilePath);
  return csvJsonArray;
}

module.exports = { main };

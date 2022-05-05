const fs = require('fs').promises;
const path = require('path');

const writeData = async (data, file) => {
  const directoryPath = path.join(__dirname, '../wiremock/stubs/mappings');
  try {
    await fs.writeFile(`${directoryPath}/${file}`, data);
    return `${file} written`;
  } catch (err) {
    return err;
  }
};

module.exports = { writeData };

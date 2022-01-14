const fs = require('fs');

const read_file = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    return data;
  } catch (err) {
    console.error('Error in read_file', err);
    throw err;
  }
};

const getSecret = (secretName) => {
  try {
    return read_file(`/etc/secrets/${secretName}.txt`);
  } catch (err) {
    throw err;
  }
};

const secretConfig = {
  kafka_keystore_password: getSecret('kafka_keystore_password'),
};

module.exports = secretConfig;

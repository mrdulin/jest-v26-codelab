const fs = require('fs');
const path = require('path');

function read(filename, callback) {
  fs.readFile(path.join(__dirname, filename), { encoding: 'utf-8' }, callback);
}

module.exports = {
  read,
};

const { exec } = require('child_process');

const randomFunc = () => {
  const newSync = exec('some command to execute');
  newSync.stdout.on('data', (data) => {
    console.log(data.toString());
  });
};

module.exports = { randomFunc };

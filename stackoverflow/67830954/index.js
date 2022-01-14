const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const greet = (name) => {
  return `Welcome ${name}`;
};
yargs(hideBin(process.argv)).command(
  'run [name]',
  'print name',
  (yargs) => {
    yargs.positional('name', { describe: 'Your name', type: 'string' });
  },
  (args) => {
    const { name } = args;

    const greetMsg = greet(name);

    console.log(greetMsg);
  }
).argv;

module.exports = { greet };

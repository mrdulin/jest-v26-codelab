const dotenv = require('dotenv');

dotenv.config();

const audience = process.env.AUTH0_AUDIENCE;
const domain = process.env.AUTH0_DOMAIN;

if (!audience) {
  throw new Error('.env is missing the definition of an AUTH0_AUDIENCE environmental variable');
}

if (!domain) {
  throw new Error('.env is missing the definition of an AUTH0_DOMAIN environmental variable');
}

module.exports = { audience, domain };

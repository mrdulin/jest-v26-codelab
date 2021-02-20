const { getAge } = require('./age');

async function isMinor() {
  const bYear = 1991;
  const age = await getAge(bYear);
  console.log('age: ', age);
  if (age <= 18) {
    return true;
  }
  return false;
}

module.exports = { isMinor };

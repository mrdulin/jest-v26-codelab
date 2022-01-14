const { add, mult } = require('./helper');

const add5thenMultiply2 = (a) => {
  const res1 = add(a, 5);
  return mult(res1, 2);
};

module.exports = { add5thenMultiply2 };

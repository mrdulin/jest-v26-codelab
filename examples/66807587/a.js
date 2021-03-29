const bar = require('./b').default;

const foo = async () => {
  const response = await bar();
  return response;
};

export default foo;

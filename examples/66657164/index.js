const funcObject = () => {
  const obj = {};
  const firstFunc = () => {
    console.log('first func!');
  };
  const secondFunc = () => {
    obj.firstFunc();
    console.log('second func!');
  };

  obj.firstFunc = firstFunc;
  obj.secondFunc = secondFunc;
  return obj;
};

module.exports = funcObject;

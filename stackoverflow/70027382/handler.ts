class Service {
  methodOne(a, b) {
    return a + b;
  }
}

const serviceFunction = (a, b) => {
  const obj = new Service();
  return obj.methodOne(a, b);
};

module.exports = { Service, serviceFunction };

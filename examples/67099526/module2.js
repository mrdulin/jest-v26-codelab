const module1 = require('./module1');

class Module2 {
  constructor() {
    try {
      module1.init();
    } catch (err) {
      console.log('error');
      process.exit(1);
    }
  }

  testfunc1 = () => {};

  testfunc2 = () => {};
}

module.exports = new Module2();

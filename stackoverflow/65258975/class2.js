const class1 = require('./class1');

class Class2 {
  getData() {
    try {
      let data = class1.getData();
      return { data };
    } catch (err) {
      return err;
    }
  }
}
module.exports = new Class2();

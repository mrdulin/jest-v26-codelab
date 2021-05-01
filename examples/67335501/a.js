class A {
  constructor() {
    this.flag = true;
  }

  setA() {
    this.flag = false;
  }
}

module.exports = new A(); //Singleton

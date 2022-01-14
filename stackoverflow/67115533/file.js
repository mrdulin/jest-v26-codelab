class Test {
  constructor() {}

  async main() {
    const a = await this.aux1('name1');
    const b = await this.aux2('name2');
  }

  async aux1(name) {
    console.log(name);
  }

  async aux2(name) {
    console.log(name);
  }
}

module.exports = Test;

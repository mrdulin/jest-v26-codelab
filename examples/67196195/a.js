import b from './b';

export default class A {
  constructor() {
    this.b = new b();
  }

  hello() {
    let someval = this.b.bye();
    if (someval) {
      console.log('success');
    } else {
      console.log('error');
    }
  }
}

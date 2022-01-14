import a from './a';

export class B {
  constructor() {}

  hello() {
    if (a.flag) {
      console.log('1');
    } else {
      console.log('2');
    }
  }
}

import Rx from 'rxjs/Rx.js';

export default class SomeClass {
  constructor() {
    this.subject = new Rx.Subject();
  }
}

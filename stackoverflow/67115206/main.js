import { stageHelper } from './util';

export class Main {
  static config = {
    value: stageHelper('abc'),
  };

  static getValue() {
    return this.config.value;
  }
}

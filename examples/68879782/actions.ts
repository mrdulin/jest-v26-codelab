import { Utils } from './utils';

export class Actions {
  constructor() {}

  async readFile(): Promise<void> {
    const utils = new Utils();
    await utils.action(5);
  }
}

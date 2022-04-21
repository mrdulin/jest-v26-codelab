import { ClientStrategy } from './ClientStrategy';

console.log('ClientStrategy.create: ', ClientStrategy.create);
export class Logger {
  public static client = ClientStrategy.create();

  public async logSth(msg: string) {
    const params = { testThing: msg };
    return Logger.client.updateItem(params);
  }
}

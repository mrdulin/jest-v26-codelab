export class Utils {
  constructor() {}

  async action(count: number): Promise<boolean> {
    console.log(count);
    return Promise.resolve(true);
  }
}

export class Service {
  public async mainfunction() {
    const unixTimestamp = new Date().getTime().toString();
    return `/tmp/somethin/${unixTimestamp}`;
  }
}

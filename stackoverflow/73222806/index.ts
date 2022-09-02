class Repository {}

export default class Container {
  private static _repository: Repository;
  public static helper: () => {};

  public static get repository(): Repository {
    if (!this._repository) {
      this._repository = new Repository();
    }

    return this._repository;
  }
}

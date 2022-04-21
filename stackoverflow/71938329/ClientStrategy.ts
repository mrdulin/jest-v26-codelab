export class ClientStrategy {
  public static create() {
    return { updateItem: async (params) => 'real value' };
  }
}

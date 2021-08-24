import { MongoClient } from 'mongodb';

class DBManager {
  private url = process.env.MONGODB_URL || '';

  private _connection: MongoClient | null;

  constructor() {
    this._connection = null;
  }
  get connection() {
    return this._connection;
  }

  async start() {
    if (!this._connection) {
      this._connection = await MongoClient.connect(this.url);
    }
  }
}

export default new DBManager();

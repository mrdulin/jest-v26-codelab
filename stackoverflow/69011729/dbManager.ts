import { MongoClient } from 'mongodb';

class DBManager {
  private connection?: MongoClient;
  private mongoUrl: string = '';

  constructor(url: string) {
    this.mongoUrl = url;
  }

  get db() {
    return this.connection!.db();
  }

  async start() {
    if (!this.connection) {
      this.connection = await MongoClient.connect(this.mongoUrl);
    }
  }
}

export default DBManager;

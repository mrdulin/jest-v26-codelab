import { MongoClient } from 'mongodb';

export class Common {
  constructor() {
    this._client = null;
  }

  static async connect(url) {
    this._client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return this._client;
  }

  static async getCollection({ url, db_name, collection_name }) {
    const client = await Common.connect(url);

    return client.db(db_name).collection(collection_name);
  }
}

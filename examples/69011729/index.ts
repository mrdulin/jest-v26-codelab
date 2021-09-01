import DBManager from './dbManager';

export async function main() {
  const url = 'mongodb://localhost:27017';
  const collectionName = 'user';
  const dbManager = new DBManager(url);
  await dbManager.start();
  const db = dbManager.db;

  if (db) {
    const collection = db.collection(collectionName);
  }
}

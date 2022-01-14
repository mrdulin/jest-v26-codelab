import DBManager from './dbManager';

export async function main() {
  await DBManager.start();
  const db = DBManager.connection!.db();
  db.collection('users');
}

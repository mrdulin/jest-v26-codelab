import getDbConnection from './db';
import express from 'express';

const app = express();
const db = getDbConnection();

app.get('/', async (_, res) => {
  let sql = 'select * from users';

  try {
    let result = await db.query(sql);
    res.status(200).json(result);
  } catch (error) {
    console.log('DB error', error);
  }
});

export { app };

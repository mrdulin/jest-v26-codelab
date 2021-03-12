import express from 'express';
import type { Request, Response } from 'express';
import type { Item } from './ItemService';
import * as ItemService from './ItemService';

const app = express();

app.get('/', async (req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

export { app };

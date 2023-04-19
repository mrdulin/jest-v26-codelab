import express from 'express';
import { Person } from './Person';

const app = express();

app.use(express.json());
app.post('/user', (req, res) => {
  const person = new Person(req.body.name);
  const name = person.getName();
  res.json({ name });
});

export { app };

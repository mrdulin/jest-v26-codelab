import express from 'express';

const app = express();

app.get('/some/api/check', (req, res) => {
  res.json({ ok: true, description: null, data: 'a' });
});

export { app };

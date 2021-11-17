import express from 'express';
import multer from 'multer';
import path from 'path';

const upload = multer({ dest: path.join(__dirname, 'uploads/') });
const app = express();

app.post('/api/v1/garment/image/upload', upload.single('file'), (req, res) => {
  console.log(req.file, req.body);
  if (req.file) {
    res.sendStatus(201);
  } else {
    res.sendStatus(400);
  }
});

export { app };

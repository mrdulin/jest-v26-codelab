import express from 'express';
import multer from 'multer';

const app = express();

const upload = multer();
const cpUpload = upload.fields([{ name: 'video' }, { name: 'image' }, { name: 'pdfDoc' }]);
app.post('/feed', cpUpload, (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.sendStatus(200);
});

export { app };

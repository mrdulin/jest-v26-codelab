const express = require('express');
const router = require('./router');
const app = express();
app.use(express.json());
app.use('/', router);

if (require.main === module) {
  const PORT = 7000;
  app.listen(PORT, () => console.log(`PORT:${PORT}`));
}

module.exports = app;

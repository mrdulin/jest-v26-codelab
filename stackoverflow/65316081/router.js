const router = require('express').Router();

router.get('/test', (req, res) => {
  res.json({ message: 'Hello' });
});

module.exports = router;

const { Router } = require('express');
const router = Router();

router.get('/dogs', Dogs.getFromRequest, function (req, res) {
  return res.json(req.testObj);
});

module.exports = router;

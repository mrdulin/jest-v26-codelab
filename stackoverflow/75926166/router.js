const express = require('express');
const router = express.Router();
const func = require('./calculation');

router.post('/calculation', func.calc);

module.exports = router;

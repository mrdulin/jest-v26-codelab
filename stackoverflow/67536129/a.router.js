import express from 'express';
const router = express.Router();
const _ = require('lodash');

router.use(express.json());
router.post('/', async (req, res, next) => {
  try {
    let data = req.body;
    console.log('data: ', data);
    if (!_.isEqual(data, { hello: 'hello' })) {
      res.send('Not Equal');
    } else {
      throw new Error('Equal');
    }
  } catch (e) {
    res.send(`Error: ${e.message}`);
  }
});

export default router;

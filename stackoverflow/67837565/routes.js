const express = require('express');
const router = express.Router();
const { fetchSamples } = require('./controllers');

const app = express();

router.get('/fetch-samples', fetchSamples);

app.use(router);

module.exports = app;

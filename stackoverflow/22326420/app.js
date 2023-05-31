const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, './views'))

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

module.exports = app
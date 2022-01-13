const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config();
const indexRouter = require('./routes/api')

app.use(cors());
app.use(express.static('public'));
app.use('/', indexRouter);

module.exports = app;
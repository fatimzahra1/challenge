const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('../api/index.js');
const app = express();

app.use(bodyParser.json());

app.use("/", indexRouter);



function does_method_exist(req, res, next) {
  next();
}


module.exports = app;

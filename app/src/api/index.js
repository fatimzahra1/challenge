const express = require("express");
const router = express.Router();
var request = require('request');
const creditDataController = require('./routes/creditData')
const serviceController = require('./routes/service')

router.get("/",serviceController.service)

router.get("/credit-data", creditDataController.creditData)

router.get("/ping", serviceController.service
    );



module.exports = router;

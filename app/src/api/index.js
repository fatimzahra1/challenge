const express = require("express");
const router = express.Router();
var request = require('request');
const personalDetailsController = require('./routes/personalDetails')
const serviceController = require('./routes/service')

router.get("/",serviceController.service)

router.get("/personal-details", personalDetailsController.personalDetails)

router.get("/ping", serviceController.service
    );



module.exports = router;

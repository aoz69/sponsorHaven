
//  ************************************ importing ************************************
const express = require('express');
const router = express.Router();
const indexConroller = require('../controllers/index');
const dbcon = require('../controllers/dbcon');
//  ************************************ importing ************************************

router.get('/', indexConroller.indexShow);
dbcon.frog();
module.exports = router;

//  ************************************ importing ************************************
const express = require('express');
const router = express.Router();
const indexConroller = require('../controllers/index');
//  ************************************ importing ************************************

router.get('/', indexConroller.indexShow);

module.exports = router;
//  ************************************ importing ************************************
const express = require('express');
const router = express.Router();
const giverController = require('../controllers/giver');
const dbcon = require('../controllers/dbcon');
//  ************************************ importing ************************************
dbcon.frog();

router.get('/giver', giverController.giver);
module.exports = router;
//  ************************************ importing ************************************
const express = require('express');
const router = express.Router();
const giverController = require('../controllers/giver');
//  ************************************ importing ************************************

router.get('/giver', giverController.giver);
module.exports = router;
//  ************************************ importing ************************************
const express = require('express');
const router = express.Router();
const finderController = require('../controllers/finder');
//  ************************************ importing ************************************

router.get('/finder', finderController.finder);
module.exports = router;
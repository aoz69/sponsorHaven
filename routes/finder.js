//  ************************************ importing ************************************
const express = require('express');
const router = express.Router();
const finderController = require('../controllers/finder');
//  ************************************ importing ************************************

router.get('/finder', finderController.finderGiver);
router.get('/giver', finderController.finderGiver);


module.exports = router;
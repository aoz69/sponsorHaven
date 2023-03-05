//  ************************************ importing ************************************
const express = require('express');
const router = express.Router();
const finderController = require('../controllers/finder');
const dbcon = require('../controllers/dbcon');
//  ************************************ importing ************************************
dbcon.frog();

router.get('/finderGiver', finderController.finderGiver);
// router.get('/giver', finderController.finderGiver);


module.exports = router;
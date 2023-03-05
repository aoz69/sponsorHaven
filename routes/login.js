//  ************************************ importing ************************************
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');
const dbcon = require('../controllers/dbcon');
//  ************************************ importing ************************************
// dbcon.frog();
router.get('/login', loginController.login);
module.exports = router;
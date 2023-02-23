//  ************************************ importing ************************************
const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signup');
//  ************************************ importing ************************************

router.get('/signup', signupController.signup);
module.exports = router;
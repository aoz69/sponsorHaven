//  ************************************ importing ************************************
const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signup');
const addDb = require('../controllers/userDb');
//  ************************************ importing ************************************

router.get('/signupForm', signupController.signup);
router.post('/signup', addDb.addUsers);
module.exports = router;
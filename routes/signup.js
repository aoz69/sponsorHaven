//  ************************************ importing ************************************
const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signup');
const addDb = require('../controllers/userDb');
const dbcon = require('../controllers/dbcon');
//  ************************************ importing ************************************
dbcon.frog();
router.get('/signupForm', signupController.signup);
router.post('/signup', addDb.addUsers);
module.exports = router;
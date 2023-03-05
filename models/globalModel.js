// const BaseModel = require('./dbModel');
const mongoose = require('mongoose');

const userModel = new mongoose.Schema( {
  Fname: String,
  Lname: String,
  number: Number,
  email: String,
  password: String,
  role: String,
  address:String,
  dob: String,
  date_of_reg: String,
  date_of_edit: String
});

module.exports = mongoose.model('User', userModel);
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


// const bookModel = new BaseModel('books', {
//   title: String,
//   author: String,
//   price: Number
// });

// //⁡⁣⁣⁢ 𝙋𝙪𝙩 𝙩𝙝𝙞𝙨 𝙞𝙨 𝙖𝙖𝙧𝙠𝙤 𝙘𝙤𝙣𝙩𝙧𝙤𝙡𝙡𝙚𝙧 𝙬𝙖𝙡𝙖 𝙛𝙞𝙡𝙚, 𝙢𝙖𝙩𝙝𝙞 𝙠𝙤 ⁡⁣⁣⁢𝙠𝙤 𝙛𝙞𝙡𝙚 𝙟𝙖𝙨𝙩𝙤 𝙖𝙡𝙡 𝙢𝙤𝙙𝙚𝙡𝙨 𝙠𝙤 𝙡𝙖𝙜𝙞 𝟭 𝙛𝙞𝙡𝙚 ⁡
// exports.addUsers = async (req, res, next) => {
//   const persons = await userModel.findAll();
//   res.render('personList', { persons });
// };

// exports.getBooks = async (req, res, next) => {
//   const books = await bookModel.findAll();
//   res.render('bookList', { books });
// };


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


// const MyModel = require('../models/MyModel');

// const myModel = new MyModel();

// const getAll = async (req, res) => {
//   try {
//     const data = await myModel.findAll();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getById = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const data = await myModel.findById(id);
//     if (!data) {
//       res.status(404).json({ message: 'Data not found' });
//     } else {
//       res.status(200).json(data);
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const create = async (req, res) => {
//   try {
//     const data = await myModel.create(req.body);
//     res.status(201).json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const updateById = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const data = await myModel.update(id, req.body);
//     if (!data) {
//       res.status(404).json({ message: 'Data not found' });
//     } else {
//       res.status(200).json(data);
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const deleteById = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const data = await myModel.delete(id);
//     if (!data) {
//       res.status(404).json({ message: 'Data not found' });
//     } else {
//       res.status(200).json({ message: 'Data deleted successfully' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Export the controller functions so they can be used in other files
// module.exports = {
//   getAll,
//   getById,
//   create,
//   updateById,
//   deleteById,
// };


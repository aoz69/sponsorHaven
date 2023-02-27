// const mongoose = require('mongoose');

// class BaseModel {

//   constructor(collectionName, schemaDefinition) {
//     this.schema = new mongoose.Schema(schemaDefinition);
//     this.model = mongoose.model(collectionName, this.schema);
//   }

//   async findAll() {
//     return await this.model.find();
//   }

//   async findById(id) {
//     return await this.model.findById(id);
//   }

//   async create(data) {
//     return await this.model.create(data);
//   }

//   async update(id, data) {
//     return await this.model.findByIdAndUpdate(id, data, { new: true });
//   }

//   async delete(id) {
//     return await this.model.findByIdAndDelete(id);
//   }
// }


// module.exports = BaseModel;
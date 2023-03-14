const mongoose = require('mongoose');


exports.frog = (req,res,next) =>{
    const db = mongoose.connect(
    // "mongodb+srv://panas:252536@cluster0.zrgghcb.mongodb.net/test",{useNewUrlParser: true})
    "mongodb://127.0.0.1:27017/sponsorHaven")

    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err));
    return db;
    
}


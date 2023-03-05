const { render } = require('pug');
const schema = require('../models/globalModel');


// exports.addUsers = (req,res) =>{
//     const user = new schema({
//         Fname: req.body.name,
//         Lname: req.body.lname,
//         number: req.body.number,
//         email: req.body.email,
//         password: req.body.password,
//         role: req.body.role,
//         address: req.body.address,
//         dob: '2010-04-25',
//         date_of_reg: '2023-01-01',
//         date_of_edit: 'NULL'
//     });
// }

exports.saveUsers = (userArray) =>{
    // function saveUsers(user, Fname, Lname, number, email, password, role, address, dob, date_of_reg, date_of_edit){
        user.save(user);
        console.log("new file saved from lul");
        res.render('index');

    }
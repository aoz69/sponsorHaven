const { render } = require('pug');
const schema = require('../models/globalModel');

exports.addUsers = (req,res) =>{
    const user = new schema({
        Fname: req.body.name,
        Lname: req.body.lname,
        number: req.body.number,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        address: req.body.address,
        dob: '2010-04-25',
        date_of_reg: '2023-01-01',
        date_of_edit: 'NULL'
    });

    user.save((err, user) => {
        if(err){
            console.log('ooops ERROR!!!: ' + err);
        }
        else{
            console.log('done ' + err);  
        }
        res.render('index');

    });
}

//to get data from database
exports.getName = async (req,res) =>{
    const ff = await schema.find({});
    console.log(ff);
    res.json(ff);
}
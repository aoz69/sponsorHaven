
//  ************************************ importing ************************************

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pathCore = require('path');
const signup = require('./routes/signup');
const login = require('./routes/login');
const indexroute = require('./routes/index');
const finderRoute = require('./routes/finder');
// const dbcon = require('./controllers/dbcon');

const port = 500;
//  ************************************ importing ************************************

// app.use(dbcon);
// use pug engine for templetes
app.set('view engine' , 'pug');
//tells where templetes are
app.set('views', 'views');

//for parsing data from body
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(pathCore.join(__dirname, 'public')));
app.use(indexroute);
app.use(signup);
app.use(login);
app.use(finderRoute);
// app.use(errorRoute);

app.listen(port);
console.log("server started at port " + port);
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');
var mongoose = require("mongoose");

require("dotenv").config();
const passport = require('passport');
require('./passport');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors())
mongoose.Promise = global.Promise;


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const connStr = `mongodb+srv://${process.env.DB_USER}:${
    process.env.DB_PASS
    }@${process.env.DB_URL}/${process.env.DB_NAME}`;


mongoose.connect(connStr, err => {
    if (err) console.log(" Connect fail")
    else console.log("Connected database!");

});




app.use('/users', usersRouter);
app.use('/', passport.authenticate('jwt', { session: false }), indexRouter);


module.exports = app;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
require("dotenv").config();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// connect db :

const connStr = `mongodb+srv://${process.env.DB_USER}:${
    process.env.DB_PASS
    }@${process.env.DB_URL}/${process.env.DB_NAME}`;

mongoose.connect(connStr, err => {
    if (err) console.log(" Connect fail")
    else console.log("Connected database!");

});


app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({
        errors: {
            message: err.message,
            error: {},
        },
    });
});

module.exports = app;

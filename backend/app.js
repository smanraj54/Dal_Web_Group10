const express = require('express');

const app = express();

const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const signUp = require ('./api/routes/signup');
const login = require ('./api/routes/login');
const forgotPassword = require ('./api/routes/forgotPassword');
const deleteUser = require('./api/routes/deleteUser');
const cors = require('cors');

const rootRoute = '/api';

app.use(cors({
    origin: ["https://group10proposalweb.herokuapp.com"],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(session({
    key: "userID",
    secret:"tester",
    resave:false,
    saveUninitialized: false,
    cookie: {
        expires: 60*60*5
    }
}))

app.use(rootRoute+'/users', signUp);

app.use(rootRoute+'/users', login);

app.use(rootRoute+'/users', forgotPassword);

app.use(rootRoute+'/users', deleteUser);

module.exports = app;

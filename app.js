const express = require('express');

const app = express();

const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const signUp = require ('./api/routes/signup');
const login = require ('./api/routes/login');
const forgotPassword = require ('./api/routes/forgotPassword');
const homepageBackend = require ('./api/routes/homepageBackend');
const cartBackend = require ('./api/routes/cartBackend');

const cors = require('cors');

const rootRoute = '/api';

//app.use(cors());

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
}));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

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

app.use('/homepage', homepageBackend);

app.use('/cart', cartBackend);


// app.use(rootRoute+'users',(req,res)=>{

//     res.send('it works!');
// })

module.exports = app;
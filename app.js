const express = require('express');

const userRoute = require('./api/routes/users');

const app = express();

const mainRoute = '/api';

app.use(mainRoute+"/users", userRoute);



module.exports = app;

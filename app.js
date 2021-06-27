const express = require('express');

const userRoute = require('./api/routes/users');

const app = express();

const mainRoute = '/';

app.use(mainRoute, userRoute);



module.exports = app;

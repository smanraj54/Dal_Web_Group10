const express = require('express');

var app = express();

//const http = require('http'); // same as to "import http from 'http'; "

const port  = process.env.port || 3000; //if the port is busy then use the global variable defined port


//const server = http.createServer(app);

app.listen(port, () =>{
    console.log("Server Started at http://localhost:"+port);
});
const userRoute = require('./api/routes/users');

const mainRoute = '/';

app.use(mainRoute, userRoute);


module.exports = app;

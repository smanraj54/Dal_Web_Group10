const app = require('./app');

const http = require('http'); // same as to "import http from 'http'; "

const port  = process.env.port || 3000; //if the port is busy then use the global variable defined port


const server = http.createServer(app);

server.listen(port, () =>{
    console.log("Server Started at http://localhost:"+port);
});





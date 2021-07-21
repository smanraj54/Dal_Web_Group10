const http = require ('http');

const port = 2000 || process.env.PORT;

const app = require('./app');

const server = http.createServer(app);

server.listen(port, () => {
    console.log('server running at port: ' + port);
})
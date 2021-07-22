const http = require ('http');

const port = process.env.PORT || 2000 ;

const app = require('./app');

const server = http.createServer(app);

server.listen(port, () => {
    console.log('server running at port: ' + port);
})
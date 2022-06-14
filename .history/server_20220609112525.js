const http = require('http');
const app = require('aptp')
const port = 3000;

const server = http.createServer(app);

server.listen(port);
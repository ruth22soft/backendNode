const http = require('http');
const app = require('./app');
const port = 3000;

const server = http.createServer(app);
var cors = require('cors')

app.use(cors())

server.listen(port);
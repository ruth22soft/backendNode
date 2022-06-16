const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoute = require('./routers/users');

app.use(bodyParser.json());
app.use("/users", userRoute);



module.exports = app
const express = require('express');

const app = express();

const userRoute = require('./routes/users');

app.use("/users", userRoute);



module.exports = app
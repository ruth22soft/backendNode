const express = require('express');

const app = express();

const userRoute = require('./routers/users');

app.use("/users", userRoute);



module.exports = app
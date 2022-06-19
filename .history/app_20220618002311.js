const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoute = require('./routers/users');
const accusationRoute = require('./routers/accusations');



app.use(bodyParser.json());
app.use("/users", userRoute);
app.use("/accusations", accusationRoute);




module.exports = app
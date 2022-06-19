const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoute = require('./routers/users');
const accusationRoute = require('./routers/accusations');
const roleRoute = require('./routers/roles');
const complainRoute = require('./routers/complains');
const scheduleRoute = require('./routers/schedules');





app.use(bodyParser.json());
app.use("/users", userRoute);
app.use("/accusations", accusationRoute);
app.use("/roles", roleRoute);
app.use("/complains", complainRoute);
app.use("/schedule", scheduleRoute);
app.use("/record", recordRoute);
app.use("/notification", notificationRoute);
app.use("/announcement", announceRoute);







module.exports = app
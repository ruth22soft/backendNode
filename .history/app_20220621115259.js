const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const userRoute = require('./routers/users');
const accusationRoute = require('./routers/accusations');
const complainRoute = require('./routers/complains');
const scheduleRoute = require('./routers/schedules');
const recordRoute = require('./routers/records');
const announceRoute = require('./routers/announcements');
const notificationRoute = require('./routers/notifications');


app.use(bodyParser.json());
app.use("/users", userRoute);
app.use("/accusations", accusationRoute);
app.use("/complains", complainRoute);
app.use("/schedule", scheduleRoute);
app.use("/record", recordRoute);
app.use("/notification", notificationRoute);
app.use("/announcement", announceRoute);

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



module.exports = app
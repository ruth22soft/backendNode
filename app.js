const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
<<<<<<< HEAD
 app.use(cors({
    origin: '*'}));const userRoute = require('./routers/users');
=======
app.use(
  cors({
    origin: '*',
  })
);

const userRoute = require('./routers/users');
>>>>>>> e7324e2a5b260ec67abda8fb75529a837cdc2d62
const accusationRoute = require('./routers/accusations');
const complainRoute = require('./routers/complains');
const scheduleRoute = require('./routers/schedules');
const recordRoute = require('./routers/records');
const announceRoute = require('./routers/announcements');
const notificationRoute = require('./routers/notifications');

app.use(bodyParser.json());
app.use('/users', userRoute);
app.use('/accusations', accusationRoute);
app.use('/complains', complainRoute);
app.use('/schedule', scheduleRoute);
app.use('/record', recordRoute);
app.use('/notification', notificationRoute);
app.use('/announcement', announceRoute);

<<<<<<< HEAD


module.exports = app
=======
module.exports = app;
>>>>>>> e7324e2a5b260ec67abda8fb75529a837cdc2d62

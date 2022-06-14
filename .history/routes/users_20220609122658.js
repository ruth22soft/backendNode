const express = require('express');
const usercontroller = require('../controllers/user.controller');

const router = express.Router();

router.get("/", usercontroller.index);
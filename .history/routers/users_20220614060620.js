const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post("/create", userController.save);
router.get("/:id", userController.show);

module.exports = router;

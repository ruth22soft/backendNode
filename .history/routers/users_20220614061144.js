const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post("/create", userController.save);
router.get("/:id", userController.show);
router.get("/", userController.index);

module.exports = router;

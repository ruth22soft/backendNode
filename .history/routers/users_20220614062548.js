const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post("/create", userController.save);
router.get("/:id", userController.show);
router.get("/", userController.index);
router.patch("/:id", userController.update);
                 post: result
module.exports = router;

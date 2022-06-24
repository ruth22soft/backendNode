const express = require('express');
const userController = require('../controllers/user.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post("/",checkAuthMiddleware.checkAuth, userController.save);
router.get("/:id", userController.show);
router.get("/", userController.index);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);
router.post("/login", userController.login);
 
module.exports = router;

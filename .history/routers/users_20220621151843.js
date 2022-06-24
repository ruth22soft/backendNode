const express = require('express');
const userController = require('../controllers/user.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post("/", userController.save);//authorized users can save the post
router.get("/:id", userController.show);
router.get("/", userController.index);
router.patch("/:id",checkAuthMiddleware.checkAuth, userController.update);
router.delete("/:id",checkAuthMiddleware.checkAuth, userController.destroy);
router.post("/login", userController.login);
 
module.exports = router;
  
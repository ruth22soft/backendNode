const express = require('express');
const notificationController = require('../controllers/notification.controller');

const router = express.Router();

router.post("/create", notificationController.save);
router.get("/:id", notificationController.show);
router.get("/", notificationController.index);
router.patch("/:id", notificationController.update);
router.delete("/:id", notificationController.destroy);
 
                
module.exports = router;
const express = require('express');
const scheduleController = require('../controllers/schedule.controller');

const router = express.Router();

router.post("/create", scheduleController.save);
router.get("/:id", scheduleController.show);
router.get("/", scheduleController.index);
router.patch("/:id", scheduleController.update);
router.delete("/:id", scheduleController.destroy);
 
                
module.exports = router;
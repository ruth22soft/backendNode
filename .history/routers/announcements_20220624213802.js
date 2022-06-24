const express = require('express');
const announceController = require('../controllers/announcement.controller');

const router = express.Router();

router.post("/create", announceController.save);
router.get("/:id", announceController.show);
router.get("/", announceController.index);
router.patch("/:id", announceController.update);
router.delete("/:id", announceController.destroy);
 
                
module.exports = router;
const express = require('express');
const recordController = require('../controllers/record.controller');

const router = express.Router();

router.post("/create", recordController.save);
router.get("/:id", recordController.show);
router.get("/", recordController.index);
router.patch("/:id", recordController.update);
router.delete("/:id", recordController.destroy);
 
                
module.exports = router;
const express = require('express');
const complainController = require('../controllers/complain.controller');

const router = express.Router();

router.post("/create", complainController.save);
router.get("/:id", complainController.show);
router.get("/", complainController.index);
router.patch("/:id", complainController.update);
router.delete("/:id", complainController.destroy);
 
                
module.exports = router;
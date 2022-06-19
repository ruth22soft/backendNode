const express = require('express');
const accusationController = require('../controllers/accusation.controller');

const router = express.Router();

router.post("/create", accusationController.save);
router.get("/:id", accusationController.show);
router.get("/", accusationController.index);
router.patch("/:id", accusationController.update);
router.delete("/:id", accusationController.destroy);
 
                
module.exports = router;
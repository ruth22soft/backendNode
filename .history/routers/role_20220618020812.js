const express = require('express');
const roleController = require('../controllers/role.controller');

const router = express.Router();

router.post("/create", roleController.save);
router.get("/:id", roleController.show);
router.get("/", roleController.index);
router.patch("/:id", roleController.update);
router.delete("/:id", roleController.destroy);
 
                
module.exports = router;
const express = require('express');
const accusationController = require('../controllers/accusation.controller');
const checkAuthMiddleware = require('../middleware/check-auth');


const router = express.Router();

router.post("/create", accusationController.save);
router.get("/:id", accusationController.show);
router.get("/", accusationController.index);
router.patch("/:id", checkAuthMiddleware.checkAuth, accusationController.update);
router.delete("/:id",checkAuthMiddleware.checkAuth,  accusationController.destroy);
 
                
module.exports = router;
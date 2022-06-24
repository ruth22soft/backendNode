const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post("/create", (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    userController.save  
                 

} );
router.get("/:id", userController.show);
router.get("/", userController.index);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);
router.post("/login", userController.login);
 
module.exports = router;

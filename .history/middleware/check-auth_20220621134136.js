const jwt = require('jsonwebtoken');
 
function checkAuth(req, res, next) {

    try {
        const token = req.headers.authorization.split(" ")[1];//
        const decodedToken = jwt.verify(token, process.env.JWT_KEY );
        req.userData = decodedToken;
        

    } catch (error) {
        
    }
}
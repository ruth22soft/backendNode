const multer = require('multer');
const path = require('path');

const storgae = multer.diskStorage({

    destination: function(req, file, cb){

        cb('null', './uploads');

    }
});
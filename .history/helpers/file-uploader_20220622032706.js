const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({

    destination: function(req, file, cb){

        cb('null', './uploads');
    },
    ilename: function(req, file, cb){

        cb(null, new Data().getTime() + path.extname(file.originalname));

    }
});

const fileFilter = (req, ile, cb) => {

    if(file.mimeType)
}
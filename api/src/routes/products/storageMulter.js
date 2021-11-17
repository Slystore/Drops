const multer = require("multer");

const storageMulter = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../api/assets/images");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

module.exports =  storageMulter ;

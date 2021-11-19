require("dotenv").config();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const { CLOUD_NAME, API_KEY_CLOUDINARY, API_SECRET_CLOUDINARY } = process.env;

const storageMulter = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/images");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const uploadImage = async (req, res) => {
  try {
    await cloudinary.config({
      cloud_name: CLOUD_NAME,
      api_key: API_KEY_CLOUDINARY,
      api_secret: API_SECRET_CLOUDINARY,
    });
    let resultado;
    await cloudinary.uploader.upload(`${req.body.image}`, (error, result) => {
      resultado = result;
    });
    await res.json(resultado);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { uploadImage, storageMulter };

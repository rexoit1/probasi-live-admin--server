const multer = require("multer");

module.exports = multer.diskStorage({
  filename: (req, file, callback) => {
    console.log(file)
    const filename =
      Date.now() + Math.floor(Math.random() * 100) + file.originalname.replace(/ /g, "");
    callback(null, filename);
  },
  destination: (req, file, callback) => {
    callback(null, "storage");
  },
});

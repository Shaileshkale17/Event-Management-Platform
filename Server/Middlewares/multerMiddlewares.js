import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //   const uploadPath = "./public/temp";
  //   // Ensure the directory exists
  //   if (!fs.existsSync(uploadPath)) {
  //     fs.mkdirSync(uploadPath, { recursive: false });
  //   }
  //   cb(null, uploadPath);
  // },
  filename: function (req, file, cb) {
    console.log("File received:", file.originalname);
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });

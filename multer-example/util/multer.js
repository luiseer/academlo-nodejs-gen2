const multer = require('multer');

// Utils
const { AppError } = require('./appError');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'imgs');
  },
  filename: (req, file, cb) => {
    console.log('Uploading image...');

    console.table(file);

    // originalname = example2.jpg
    const [name, extension] = file.originalname.split('.');

    const fileName = `${name}-${Date.now()}.${extension}`;

    cb(null, fileName);
  }
});

const multerFileFilter = (req, file, cb) => {
  console.log(file);
  if (!file.mimetype.startsWith('image')) {
    // Return an error
    cb(new AppError(400, 'Must provide an image as a file'), false);
  } else {
    cb(null, true);
  }
};

const upload = multer({
  storage,
  fileFilter: multerFileFilter
});

module.exports = { upload };

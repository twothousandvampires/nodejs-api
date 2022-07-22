const express = require('express');
const multer = require('multer');
const config = require('../config');

const fileHandler = multer({ dest: config.uploads_dir });
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const companiesController = require('../controllers/companies.controller');

const filesParamsValidator = require('../middleware/validators/files.params.validator');
const filesController = require('../controllers/files.controller');

router.get(
  '/:id?',
  auth,
  companiesController.get,
);

router.patch(
  '/:id',
  auth,
  companiesController.update,
);

router.post(
  '/:id/image',
  auth,
  fileHandler.fields([{ name: 'file', maxCount: 1 }]),
  filesParamsValidator.addCompanyImage,
  filesController.saveImage,
);

router.delete(
  '/:id/image/:image_name',
  auth,
  filesParamsValidator.removeCompanyImage,
  filesController.removeImage,
);

module.exports = router;

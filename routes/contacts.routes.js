const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth.middleware');
const contactsDataValidator = require('../middleware/validators/contacts.params.validator');
const contactsController = require('../controllers/contacts.controller');

router.get(
  '/:id?',
  auth,
  contactsController.get,
);

router.patch(
  '/:id',
  auth,
  contactsDataValidator.validateUpdateData,
  contactsController.update,
);

router.delete(
    '/:id',
    auth,
    contactsController.remove,
);

router.post(
    '/',
    auth,
    contactsDataValidator.validateCreateData,
    contactsController.create,
);

module.exports = router;

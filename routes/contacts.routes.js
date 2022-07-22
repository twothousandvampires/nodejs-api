const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth.middleware');
const contactsController = require('../controllers/contacts.controller');

router.get(
  '/:id?',
  auth,
  contactsController.get,
);

router.patch(
  '/:id',
  auth,
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
    contactsController.create,
);

module.exports = router;

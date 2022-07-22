const { Router } = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const mongoose = require("mongoose");
const logger = require('../services/logger')(module);
require('../models/User');
const router = Router();
const User = mongoose.model('user');

router.post('/', async (req, res) => {
  const user = await User.findOne({
    name: req.body.name,
    password: req.body.password,
  });

  if (!user) {
    logger.error('No user passed');
    return res.status(400).json({
      error: 'No user passed',
    });
  }

  const token = jwt.sign(
    { user },
    config.app,
    {
      expiresIn: config.jwt_ttl,
    },
  );

  res.header('Authorization', `Bearer ${token}`);
  return res.status(200).end();
});

module.exports = router;

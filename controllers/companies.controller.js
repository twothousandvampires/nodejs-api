const config = require('../config');
const mongoose = require('mongoose');
require('../models/Company');
const model = mongoose.model('companies');

module.exports = {
  get,
  update,
};

function get(req, res) {
  const URL = _getCurrentURL(req);
  if (req.params.id) {
    model.findOne({ _id: req.params.id }).then((r) => {
      res.status(200).json(r)
    });
  } else {
    model.find().then((r) => {
      res.status(200).json(r)
    });
  }
}

async function update(req, res) {
  const URL = _getCurrentURL(req);
  const requestBody = req.body;
  const company = await model.findOne({ _id: req.params.id });
  Object.keys(requestBody).forEach((key) => {
    company[key] = requestBody[key];
  });
  company.updatedAt = new Date();
  company.save().then((r)=>{
    return res.status(200).json(r);
  });
}

function del(req, res) {
  return res.status(200).end();
}

function _getCurrentURL(req) {
  const { port } = config;
  return `${req.protocol}://${req.hostname}${port === '80' || port === '443' ? '' : `:${port}`}/`;
}

const config = require('../config');
const mongoose = require('mongoose');
require('../models/Company');
const model = mongoose.model('companies');

module.exports = {
  get,
  update,
};

function get(req, res) {
  let {perPage} = config , page = Math.max(0, req.query.page);
  if (req.params.id) {
    model.findOne({ _id: req.params.id }).then((response) => {
      res.status(200).json(response);
    });
  }else {
      model.find().limit(perPage)
                  .skip(perPage * page)
                  .sort({
                    [req.query.sort]: 'asc'
                  })
                  .then((response) => {
                    res.status(200).json(response);
                  });
  }
}

async function update(req, res) {
  const requestBody = req.body;
  const company = await model.findOne({ _id: req.params.id });
  Object.keys(requestBody).forEach((key) => {
    company[key] = requestBody[key];
  });
  company.updatedAt = new Date();
  company.save().then((response)=>{
    return res.status(200).json(response);
  });
}

const mongoose = require('mongoose');
require('../models/Contact');
const model = mongoose.model('contact');
module.exports = {
  get,
  update,
  create,
  remove,
};

function get(req, res) {
  if (req.params.id) {
    model.findOne({ id: req.params.id }).then((r) => res.status(200).json(r));
  } else {
    model.find().then((r) => res.status(200).json(r));
  }
}

async function update(req, res) {
  const requestBody = req.body;
  const contact = await model.findOne({ id: req.params.id });
  Object.keys(requestBody).forEach((key) => {
    contact[key] = requestBody[key];
  });
  contact.updatedAt = new Date();
  contact.save().then((r)=>{
    return res.status(200).json(r);
  });
}

function remove(req, res){
  model.deleteOne({ _id : req.params.id }).then(()=>{
    res.status(200).send('Contact deleted');
  });
}

function create(req, res){
  const contact = req.body
  contact.createdAt = new Date();
  contact.updatedAt = new Date();
  model.create(contact).then(() => {
    res.status(200).json(contact);
  });
}

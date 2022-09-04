require('../models/Contact');

const mongoose = require('mongoose');
const model = mongoose.model('contact');

module.exports = {
  get,
  update,
  create,
  remove,
};

function get(req, res) {
  if (req.params.id) {
    model.findOne({ id: req.params.id }).then((response) => res.status(200).json(response));
  } else {
    model.find().then((response) => res.status(200).json(response));
  }
}

async function update(req, res) {
  const requestBody = req.body;
  const contact = await model.findOne({ _id: req.params.id });
  console.log(contact)
  Object.keys(requestBody).forEach((key) => {
    contact[key] = requestBody[key];
  });
  contact.updatedAt = new Date();
  contact.save().then((response=>{
    return res.status(200).json(response);
  }));
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

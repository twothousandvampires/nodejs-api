const mongoose = require('mongoose');

const { Schema } = mongoose;

const CompanySchema = new Schema({
  contactId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  shortName: {
    type: String,
    required: true,
  },
  contract: {
    type: Object,
    require: true,
    no: {
      type: Number,
      required: true,
    },
    issue_date: {
      type: Date,
      required: true,
    },
  },
  type: {
    type: Array,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
    required: true,
  },
  photos: {
    type: Array,
    required: true,
  },
});

mongoose.model('companies', CompanySchema);

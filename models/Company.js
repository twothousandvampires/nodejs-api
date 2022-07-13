const mongoose = require('mongoose');

const { Schema } = mongoose;

const CompanySchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  contactId: {
    type: Number,
    required: true,
  },
  name: {
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
  created_at: {
    type: Date,
    required: true,
  },
  updated_at: {
    type: Date,
    required: true,
  },
  photos: {
    type: Array,
    required: true,
  },
});

mongoose.model('company', CompanySchema);

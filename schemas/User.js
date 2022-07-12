const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
 * User Schema
 */
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
});

mongoose.model('user', UserSchema);

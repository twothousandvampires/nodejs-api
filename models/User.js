const mongoose = require('mongoose');
const { Schema } = mongoose;

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

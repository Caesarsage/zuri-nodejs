const mongoose = require('mongoose');

const {Schema} = mongoose;

const dataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
});

const Data= mongoose.model("Data", dataSchema);

module.exports = Data;
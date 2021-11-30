const { Schema, model } = require('mongoose');

const GovernmentsSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  description: { type: String }
});

const Governments = model('Governments', GovernmentsSchema);

module.exports = Governments;
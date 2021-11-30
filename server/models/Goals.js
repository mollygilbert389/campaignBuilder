const { Schema, model } = require('mongoose');

const GoalsSchema = new Schema({
  id: { type: Number },
  option: { type: String },
  type: { type: String }
});

const Goals = model('Goals', GoalsSchema);

module.exports = Goals;
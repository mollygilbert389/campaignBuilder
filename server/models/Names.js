const { Schema, model } = require('mongoose');

const NamesSchema = new Schema({
  id: { type: Number },
  option: { type: String },
  type: { type: String }
});

const Names = model('Names', NamesSchema);

module.exports = Names;
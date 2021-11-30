const { Schema, model } = require('mongoose');

const ErasSchema = new Schema({
  id: { type: Number },
  option: { type: String }
});

const Eras = model('Eras', ErasSchema);

module.exports = Eras;
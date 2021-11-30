const { Schema, model } = require('mongoose');

const ReligionSchema = new Schema({
  id: { type: Number },
  option: { type: String },
  toolTipData: { type: String }
});

const Religion = model('Religion', ReligionSchema);

module.exports = Religion;
const { Schema, model } = require('mongoose');

const EncountersSchema = new Schema({
  id: { type: Number },
  option: { type: String }
});

const Encounters = model('Encounters', EncountersSchema);

module.exports = Encounters;
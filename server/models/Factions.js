const { Schema, model } = require('mongoose');

const FactionSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  icon: { type: String }
});

const Factions = model('Factions', FactionSchema);

module.exports = Factions;
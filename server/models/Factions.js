const { Schema } = require('mongoose');

const FactionSchema = new Schema({
  factions: [{ 
    id: { type: Number },
    name: { type: String },
    icon: { type: String }
  }]
});

const Factions = model('Factions', FactionSchema);

module.exports = Factions;
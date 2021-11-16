const { Schema } = require('mongoose');

const EncounterSchema = new Schema({
  encounterOptions: { type: [String]},
});

const Encounter = model('Encounter', EncounterSchema);

module.exports = Encounter;
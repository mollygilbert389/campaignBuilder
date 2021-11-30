const { Schema, model } = require('mongoose');

const DungeonLocationsSchema = new Schema({
  id: { type: Number },
  option: { type: String }
});

const DungeonLocations = model('DungeonLocations', DungeonLocationsSchema);

module.exports = DungeonLocations;

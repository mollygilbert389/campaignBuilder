const { Schema, model } = require('mongoose');

const NonDungeonLocationsSchema = new Schema({
  id: { type: Number },
  option: { type: String }
});

const NonDungeonLocations = model('NonDungeonLocations', NonDungeonLocationsSchema);

module.exports = NonDungeonLocations;
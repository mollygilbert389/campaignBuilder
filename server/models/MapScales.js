const { Schema, model } = require('mongoose');

const MapScalesSchema = new Schema({
  id: { type: Number },
  option: { type: String }
});

const MapScales = model('MapScales', MapScalesSchema);

module.exports = MapScales;
const { Schema, model } = require('mongoose');

const MapSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  image: { type: String },
  rooms: { type: String },
  world: { type: [String] }
});

const Map = model('Map', MapSchema);

module.exports = Map;
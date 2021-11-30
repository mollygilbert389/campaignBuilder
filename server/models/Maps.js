const { Schema, model } = require('mongoose');

const MapsSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  image: { type: String },
  rooms: { type: String },
  world: { type: [String] }
});

const Maps = model('Maps', MapsSchema);

module.exports = Maps;
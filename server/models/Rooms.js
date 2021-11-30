const { Schema, model } = require('mongoose');

const RoomsSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  image: { type: String },
  rooms: { type: String },
  world: { type: [String] },
  type: { type: String }
});

const Rooms = model('Rooms', RoomsSchema);

module.exports = Rooms;
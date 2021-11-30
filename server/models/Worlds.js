const { Schema, model } = require('mongoose');

const WorldsSchema = new Schema({
  id: { type: Number },
  option: { type: String }
});

const Worlds = model('Worlds', WorldsSchema);

module.exports = Worlds;
const { Schema, model } = require('mongoose');

const MonstersSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  category: { type: String },
  subcategory: { type: String },
  type: { type: String },
  area: { type: [String] },
  ideal: { type: String }
});

const Monsters = model('Monsters', MonstersSchema);

module.exports = Monsters;
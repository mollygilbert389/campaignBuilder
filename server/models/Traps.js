const { Schema, model } = require('mongoose');

const TrapsSchema = new Schema({
  id: { type: Number },
  option: { type: String }
});

const Traps = model('Traps', TrapsSchema);

module.exports = Traps;
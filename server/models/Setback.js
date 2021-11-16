const { Schema } = require('mongoose');

const SetbackSchema = new Schema({
  traps: [{
    id: { type: Number },
    option: { type: String }
  }],
  worldShakingEvents: [{
    id: { type: Number },
    title: { type: String },
    possible: { type: [String] }
  }]
});

const Setback = model('Setback', SetbackSchema);

module.exports = Setback;
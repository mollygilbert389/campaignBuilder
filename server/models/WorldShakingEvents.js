const { Schema, model } = require('mongoose');

const WorldShakingEventsSchema = new Schema({
  id: { type: Number },
  option: { type: String },
  possible: [{
    id: { type: Number },
    option: { type: String }
  }]
});

const WorldShakingEvents = model('WorldShakingEvents', WorldShakingEventsSchema);

module.exports = WorldShakingEvents;
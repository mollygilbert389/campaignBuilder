const { Schema, model } = require('mongoose');

const LocalEventsSchema = new Schema({
  id: { type: Number },
  option: { type: String }
});

const LocalEvents = model('LocalEvents', LocalEventsSchema);

module.exports = LocalEvents;
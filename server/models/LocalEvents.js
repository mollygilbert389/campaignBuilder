const { Schema } = require('mongoose');

const LocalEventsSchema = new Schema({
  localEventOptions: [{ 
    id: { type: Number },
    eventName: { type: String }
  }]
});

const LocalEvents = model('LocalEvents', LocalEventsSchema);

module.exports = LocalEvents;
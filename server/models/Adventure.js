const { Schema } = require('mongoose');

const AdventureSchema = new Schema({
  meetingSelection: [{
    id: { type: Number },
    goal: { type: String }
  }],
  dungeonTypeLocation:[{
    id: { type: Number },
    option: { type: String }
  }],
  nonDungeonTypeLocation:[{
    id: { type: Number },
    option: { type: String }
  }],
});

const Adventure = model('Adventure', AdventureSchema);

module.exports = Adventure;

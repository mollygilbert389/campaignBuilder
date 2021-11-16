const { Schema } = require('mongoose');

const GoalsSchema = new Schema({
  dungeonGoals: [{
    id: { type: Number },
    goal: { type: String }
  }],
  wildernessGoals:[{
    id: { type: Number },
    option: { type: String }
  }],
  otherGoals:[{
    id: { type: Number },
    option: { type: String }
  }],
  eventGoals:[{
    id: { type: Number },
    option: { type: String }
  }],
});

const Goals = model('Goals', GoalsSchema);

module.exports = Goals;
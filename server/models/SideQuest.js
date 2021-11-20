const { Schema, model } = require('mongoose');

const SideQuestSchema = new Schema({
  sideQuestOptions: [{
    id: { type: Number },
    option: { type: String }
  }]
});

const SideQuest = model('SideQuest', SideQuestSchema);

module.exports = SideQuest;
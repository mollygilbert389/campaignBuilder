const { Schema, model } = require('mongoose');

const SideQuestSchema = new Schema({
  id: { type: Number },
  option: { type: String }
});

const SideQuest = model('SideQuest', SideQuestSchema);

module.exports = SideQuest;
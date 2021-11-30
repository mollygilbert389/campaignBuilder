const { Schema, model } = require('mongoose');

const SideQuestsSchema = new Schema({
  id: { type: Number },
  option: { type: String }
});

const SideQuests = model('SideQuests', SideQuestsSchema);

module.exports = SideQuests;
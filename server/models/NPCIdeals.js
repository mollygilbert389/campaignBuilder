const { Schema, model } = require('mongoose');

const NPCIdealsSchema = new Schema({
    id: { type: Number },
    option: { type: String },
    list: { type: [String] }
});

const NPCIdeals = model('NPCIdeals', NPCIdealsSchema);

module.exports = NPCIdeals;
const { Schema, model } = require('mongoose');

const NPCsSchema = new Schema({
    id: { type: Number },
    option: { type: String },
    type: { type: String }
});

const NPCs = model('NPCs', NPCsSchema);

module.exports = NPCs;
const { Schema, model } = require('mongoose');

const EvilNPCSchema = new Schema({
  subTypes: { type: [String]},
});

const EvilNPC = model('EvilNPC', EvilNPCSchema);

module.exports = EvilNPC;
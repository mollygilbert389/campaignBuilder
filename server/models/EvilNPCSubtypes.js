const { Schema, model } = require('mongoose');

const EvilNPCSubtypesSchema = new Schema({
  id: { type: Number },
  option: { type: String }
});

const EvilNPCSubtypes = model('EvilNPCSubtypes', EvilNPCSubtypesSchema);

module.exports = EvilNPCSubtypes;
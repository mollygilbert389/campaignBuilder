const { Schema, model } = require('mongoose');

const LanguagesSchema = new Schema({
  id: { type: Number },
  option: { type: String }
});

const Languages = model('Languages', LanguagesSchema);

module.exports = Languages;
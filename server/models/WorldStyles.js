const { Schema, model } = require('mongoose');

const WorldStylesSchema = new Schema({
  id: { type: Number },
  type: { type: String },
  image: { type: String }
});

const WorldStyles = model('WorldStyles', WorldStylesSchema);

module.exports = WorldStyles;
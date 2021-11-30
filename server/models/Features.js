const { Schema, model } = require('mongoose');

const FeaturesSchema = new Schema({
  id: { type: Number },
  option: { type: String }
});

const Features = model('Features', FeaturesSchema);

module.exports = Features;